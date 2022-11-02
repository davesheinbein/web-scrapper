import React, { useEffect, useState } from 'react';
import '../styles/example.scss';
import axios from 'axios';

function Example() {
	const [html, setHtml] = useState('Sample');
	const [headerLogo, setHeaderLogo] = useState([]);
	const [artist, setArtist] = useState([]);
	const [baseTitle, setBaseTitle] = useState([]);
	const [rank, setRank] = useState([]);
	const [remixLink, setRemixLink] = useState([]);
	const [socMedia, setSocMedia] = useState([]);
	const [socMediaLink, setSocMediaLink] = useState([]);
	const [thumbNail, setThumbNail] = useState([]);
	const sampleUrl = 'https://hypem.com/popular';

	const sendUrl = () => {
		axios
			.get(
				// 'https://aqueous-lowlands-32179.herokuapp.com/scrape',
				'http://localhost:8081/scrape',
				{
					params: { url: sampleUrl },
				}
			)
			.then((res) => {
				const data = JSON.parse(res.data);
				console.log('🚀 ~ data', data);
				const {
					html,
					headerLogo,
					artist,
					baseTitle,
					rank,
					remixLink,
					socialMedia,
					socialMediaLink,
					thumb,
				} = data;
				setHtml(html);
				setHeaderLogo(headerLogo);
				setArtist(artist);
				setBaseTitle(baseTitle);
				setRank(rank);
				setRemixLink(remixLink);
				setSocMedia(socialMedia);
				setSocMediaLink(socialMediaLink);
				setThumbNail(thumb);
			})
			.catch((error) => console.log('error:', error));
	};

	useEffect(() => {
		sendUrl();
	}, [sampleUrl]);

	return (
		<div className='example'>
			<div className='example__container'>
				<div className='example__container-title'>
					Example View
				</div>
				<div className='example__container-data'>
					<div className='example__container-data-container'>
						<textarea
							className='example__container-data-container-info'
							rows={'15'}
							cols={'120'}
							onChange={() => {}}
							value={html}></textarea>
					</div>
					<div className='example__container-data-container'>
						<iframe
							className='example__container-data-container-info'
							srcDoc={html}
							title='preview'
							allowpaymentrequest='false'
						/>
					</div>
					<div className='example__container-data-container'>
						<div>Scraped Data Organized</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'></div>
							Header Logo
							{headerLogo.map((data) => {
								return (
									<div
										className='example__container-data-container-sorted-data'
										key={data.id}>
										{data.value}
									</div>
								);
							})}
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'></div>
                            Artist
							{artist.map((data) => {
								return (
									<div
										className='example__container-data-container-sorted-data'
										key={data.id}>
										{data.value}
									</div>
								);
							})}
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'></div>
							{baseTitle.map((data) => {
								return (
									<div
										className='example__container-data-container-sorted-data'
										key={data.id}>
										{data.value}
									</div>
								);
							})}
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'></div>
							{rank.map((data) => {
								return (
									<div
										className='example__container-data-container-sorted-data'
										key={data.id}>
										{data.value}
									</div>
								);
							})}
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'></div>
							{remixLink.map((data) => {
								return (
									<div
										className='example__container-data-container-sorted-data'
										key={data.id}>
										{data.value}
									</div>
								);
							})}
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'></div>
							{socMedia.map((data) => {
								return (
									<div
										className='example__container-data-container-sorted-data'
										key={data.id}>
										{data.value}
									</div>
								);
							})}
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'></div>
							{socMediaLink.map((data) => {
								return (
									<div
										className='example__container-data-container-sorted-data'
										key={data.id}>
										{data.value}
									</div>
								);
							})}
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'></div>
							{thumbNail.map((data) => {
								return (
									<div
										className='example__container-data-container-sorted-data'
										key={data.id}>
										{data.value}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Example;
