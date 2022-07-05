import React from 'react';

function Tools({displayedProject}) {
	return (
		<div>
			<h2>GOAL: {displayedProject.goal}</h2>
			<ul>
				{displayedProject.techPoints.map(point => (
					<li key={point}>{point}</li>
				))}
			</ul>
		</div>
	);
}

export default Tools;