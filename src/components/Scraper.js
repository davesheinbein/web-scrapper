import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PreviewView from './PreviewView';
import '../styles/scraper.scss';

const Scraper = () => {
	const [url, setUrl] = useState('');
	const [html, setHtml] = useState('HTML Scraped');
	const [error, setError] = useState(false);
	const htmlDefault = html === 'HTML Scraped';

	const sendUrl = () => {
		setError(false);
		if (!!url && url.length > 0) {
			axios
				.get(
					'https://aqueous-lowlands-32179.herokuapp.com/scrape',
					{
						params: { url: url },
					}
				)
				.then((res) => {
					const { data } = res;
					setHtml(data.html);
					setError(false);
				})
				.catch((error) => {
					console.log('Error: ', error);
					setError(true);
				});
		}
	};

	useEffect(() => {
		sendUrl();
	}, []);

	return (
		<div className='scraper'>
			<div className='scraper__container'>
				<div className='scraper__container-title'>
					<span className='scraper__container-title-text'>
						Please enter url below
					</span>
				</div>
				<div className='scraper__container-input'>
					<input
						type={'text'}
						className='scraper__container-input-item'
						aria-label='Input'
						value={url}
						onChange={(e) => setUrl(e.target.value)}
					/>
				</div>
				<div className='scraper__container-btn'>
					<button
						className='scraper__container-btn-item'
						type='button'
						id='button'
						onClick={() => sendUrl()}>
						Scrape
					</button>
				</div>
				<div
					className={`scraper__container-data ${
						!!htmlDefault && 'scraper__container-data-none'
					}`}>
					{!!htmlDefault ? (
						<div className='scraper__container-data-item'>
							Enter a url above to see scraped data...
						</div>
					) : (
						<textarea
							className='scraper__container-data-item'
							rows={'15'}
							cols={'120'}
							onChange={() => {}}
							value={html}></textarea>
					)}
				</div>
				{!!error ? (
					<div className='scraper__container-data-error'>
						An error occured while scraping data... please
						try again!
					</div>
				) : null}
				<PreviewView
					html={html}
					htmlDefault={htmlDefault}
				/>
			</div>
		</div>
	);
};

export default Scraper;
