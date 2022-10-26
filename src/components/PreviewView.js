import React from 'react';
import '../styles/previewview.scss';

function PreviewView({ html, htmlDefault }) {
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
						srcDoc={html}
						title='preview'
						allowpaymentrequest='false'
					/>
				)}
			</div>
		</div>
	);
}

export default PreviewView;
