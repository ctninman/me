import React from 'react';

function Features({displayedProject}) {
	return (
		<div>
			<ul>
				{displayedProject.features.map(feature => (
					<li key={feature}>{feature}</li>
				))}
			</ul>
		</div>
	);
}

export default Features;