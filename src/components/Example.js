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
				console.log('🚀 ~ data', data);
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
			.catch((error) => {
				console.log('error:', error);
			});
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
					<div className='example__container-data-container example__container-data-container-flex-col'>
						<div className='example__container-data-container-title'>
							Scraped Data Organized
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'>
								Header Logo
							</div>
							<div className='example__container-data-container-sorted-data'>
								{headerLogo.map((data, idx) => {
									return (
										<div
											className='example__container-data-container-sorted-data-item'
											key={data.id}>
											{!!data.value && idx ? ',' : ''}
											{data.value}
										</div>
									);
								})}
							</div>
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'>
								Artists
							</div>
							<div className='example__container-data-container-sorted-data'>
								{artist.map((data, idx) => {
									return (
										<div
											className='example__container-data-container-sorted-data-item'
											key={data.id}>
											{!!data.value && idx ? ',' : ''}
											{data.value}
										</div>
									);
								})}
							</div>
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'>
								Titles
							</div>
							<div className='example__container-data-container-sorted-data'>
								{baseTitle.map((data, idx) => {
									return (
										<div
											className='example__container-data-container-sorted-data-item'
											key={data.id}>
											{!!data.value && idx ? ',' : ''}
											{data.value}
										</div>
									);
								})}
							</div>
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'>
								Rank
							</div>
							<div className='example__container-data-container-sorted-data'>
								{rank.map((data, idx) => {
									return (
										<div
											className='example__container-data-container-sorted-data-item'
											key={data.id}>
											{!!data.value && idx ? ',' : ''}
											{data.value}
										</div>
									);
								})}
							</div>
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'>
								Remix Links
							</div>
							<div className='example__container-data-container-sorted-data'>
								{remixLink.map((data, idx) => {
									return (
										<div
											className='example__container-data-container-sorted-data-item'
											key={data.id}>
											{!!data.value && idx ? ',' : ''}
											{data.value}
										</div>
									);
								})}
							</div>
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'>
								Social Media
							</div>
							<div className='example__container-data-container-sorted-data'>
								{socMedia.map((data, idx) => {
									return (
										<div
											className='example__container-data-container-sorted-data-item'
											key={data.id}>
											{!!data.value && idx ? ',' : ''}
											{data.value}
										</div>
									);
								})}
							</div>
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'>
								Social Media Link
							</div>
							<div className='example__container-data-container-sorted-data'>
								{socMediaLink.map((data, idx) => {
									return (
										<div
											className='example__container-data-container-sorted-data-item'
											key={data.id}>
											{!!data.value && idx ? ',' : ''}
											{data.value}
										</div>
									);
								})}
							</div>
						</div>
						<div className='example__container-data-container-sorted'>
							<div className='example__container-data-container-sorted-title'>
								ThumbNail
							</div>
							<div className='example__container-data-container-sorted-data'>
								{thumbNail.map((data, idx) => {
									return (
										<div
											className='example__container-data-container-sorted-data-item'
											key={data.id}>
											{!!data.value && idx ? ',' : ''}
											{data.value}
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Example;
