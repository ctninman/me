import React from 'react';

function Story({displayedProject}) {
	return (
		<div>
			{displayedProject.description.map(parag => (
				<p style={{textIndent: '20px'}}>{parag}</p>
			))}
		</div>
	);
}

export default Story;