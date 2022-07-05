import React from 'react';

function Story({displayedProject}) {
	return (
		<div>
			{displayedProject.description.map(parag => (
				<p>{parag}</p>
			))}
		</div>
	);
}

export default Story;