import React from 'react';
import '../styles/backtop.scss';

function BackTop() {
	return (
		<div className='back__top'>
			<a className='back__top-link' href='#home'>
				<i
					className='fa fa-arrow-up'
					aria-hidden='true'></i>
			</a>
		</div>
	);
}

export default BackTop;
