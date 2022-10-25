import React, { useState } from 'react';
import axios from 'axios';
import PreviewView from './PreviewView';
// import '../styles/scraper.scss';
import '../styles/scraper.css';

const Scraper = () => {
	const [url, setUrl] = useState('');
	const [html, setHtml] = useState('HTML Scraped');
	const htmlDefault = html === 'HTML Scraped';

	const sendUrl = () => {
		axios
			.get('http://localhost:8081/scrape', {
				params: { url: url },
			})
			.then((res) => {
				setHtml(res.data);
			})
			.catch((error) => console.log('error:', error));
		console.log('html:', html);
	};

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
						aria-description='Input for search url'
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
							value={html}></textarea>
					)}
				</div>
				<PreviewView
					html={html}
					htmlDefault={htmlDefault}
				/>
			</div>
		</div>
	);
};

export default Scraper;
