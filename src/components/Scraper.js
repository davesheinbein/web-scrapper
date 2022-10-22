import React, { useState } from 'react';
import axios from 'axios';
// import '../styles/scraper.scss';

const Scraper = () => {
	const [url, setUrl] = useState('');
	const [html, setHtml] = useState('HTML Scraped');

	const sendUrl = () => {
		axios
			.get('', {
				params: { url: url },
			})
			.then((res) => {
				setHtml(res.data);
			});
	};

	return (
		<div className='temp'>
			<div className='temp'>
				<div className='temp'>
					<span className='temp'>Scraper</span>
				</div>
				<input
					type={'text'}
					className='temp'
					aria-label='Input'
					aria-description='Input for search url'
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/>
				<div className='temp'>
					<button
						className='temp'
						type='button'
						id='button'
						onClick={() => sendUrl()}>
						Scraper
					</button>
				</div>
				<div className='temp'>
					<textarea
						rows={'15'}
						cols={'120'}
						value={html}></textarea>
				</div>
			</div>
		</div>
	);
};

export default Scraper;
