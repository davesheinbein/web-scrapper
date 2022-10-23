import React from 'react';
// import '../styles/previewview.scss';
import '../styles/previewview.css';

function PreviewView({ html, htmlDefault }) {
	console.log('🚀 ~ html', html);
	console.log('🚀 ~ htmlDefault', htmlDefault);
	return (
		<div className='preview'>
			<div className='preview__title'>Preview View</div>
			<div className='preview__content'>
				{!!!!htmlDefault ? (
					<div className='preview__content-item-none'>
						Preview currently unavailable...
					</div>
				) : (
					<iframe
						className='preview__content-item'
						srcdoc={html}
					/>
				)}
			</div>
		</div>
	);
}

export default PreviewView;
