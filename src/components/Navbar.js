import React, { useEffect } from 'react';
import '../styles/navbar.scss';

function Navbar() {
	const randomColor1 =
		'#' + Math.floor(Math.random() * 0xffffff).toString(16);
	const randomColor2 =
		'#' + Math.floor(Math.random() * 0xffffff).toString(16);
	const invertColor = (hex) => {
		if (hex.indexOf('#') === 0) {
			hex = hex.slice(1);
		}
		if (hex.length === 3) {
			hex =
				hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
		}
		if (hex.length === 4) {
			hex =
				hex[0] + hex[1] + hex[2] + hex[3] + hex[0] + hex[1];
		}
		if (hex.length === 5) {
			hex =
				hex[0] + hex[1] + hex[2] + hex[3] + hex[4] + hex[0];
		}
		if (hex.length === 6) {
			hex =
				hex[0] + hex[1] + hex[2] + hex[3] + hex[4] + hex[5];
		}
		if (hex.length > 6) {
			hex =
				hex[0] + hex[1] + hex[2] + hex[3] + hex[4] + hex[5];
		}
		var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(
				16
			),
			g = (255 - parseInt(hex.slice(2, 4), 16)).toString(
				16
			),
			b = (255 - parseInt(hex.slice(4, 6), 16)).toString(
				16
			);
		return '#' + padZero(r) + padZero(g) + padZero(b);
	};

	const padZero = (str, len) => {
		len = len || 2;
		var zeros = new Array(len).join('0');
		return (zeros + str).slice(-len);
	};
	useEffect(() => {
		const root = document.documentElement;
		root.style.setProperty(
			'--random-color-one',
			randomColor1
		);
		root.style.setProperty(
			'--random-color-two',
			randomColor2
		);
		root.style.setProperty(
			'--random-color-one-text',
			invertColor(randomColor1)
		);
		root.style.setProperty(
			'--random-color-two-text',
			invertColor(randomColor2)
		);
	}, []);

	return (
		<nav className='navbar' id='home'>
			<a className='navbar-text' href='#home'>
				Web Scraper
			</a>
		</nav>
	);
}

export default Navbar;
