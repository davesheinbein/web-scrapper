import React, { useEffect, useState } from 'react';
import '../styles/example.scss';
import axios from 'axios';

function Example() {
	const [html, setHtml] = useState('Sample');
	const sampleUrl = 'https://hypem.com/popular';

	const sendUrl = () => {
		axios
			.get(
				'http://localhost:8081/scrape',
				{
					params: { url: sampleUrl },
				}
			)
			.then((res) => {
				setHtml(res.data);
			})
			.catch((error) => console.log('error:', error));
		console.log('html:', html);
	};

	useEffect(() => {
		sendUrl();
	}, []);

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
				</div>
			</div>
		</div>
	);
}

export default Example;
