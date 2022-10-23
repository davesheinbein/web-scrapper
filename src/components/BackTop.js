import React from 'react';
// import '../styles/backtop.scss';
import '../styles/backtop.css';

function BackTop() {
	return (
		<div className='back__top'>
			<a className='back__top-link' href='#home'>
				<i class='fa fa-arrow-up' aria-hidden='true'></i>
			</a>
		</div>
	);
}

export default BackTop;
