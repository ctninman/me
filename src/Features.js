import React from 'react';

function Features({displayedProject}) {
	return (
		<div>
			<div style={{width: '100%'}}>
				<img style={{width: '100%'}} src={displayedProject.thumbs} />
			</div>
			<ul>
				{displayedProject.features.map(feature => (
					<li key={feature}>{feature}</li>
				))}
			</ul>
		</div>
	);
}

export default Features;