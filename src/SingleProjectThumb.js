import React, { useState } from 'react';

function SingleProjectThumb({project, setDisplayedProject, displayedProject, setSelectedView}) {

	const activeProjectStyle = {
		border: '5px solid #7E52A0',
		boxSizing: 'border-box'
	}
	
	function handleProjectSelect () {
		setSelectedView('story')
		setDisplayedProject(project)
	}
	
	return (
		<div 
				className='project-thumb' 
				onClick={handleProjectSelect}
				style={project === displayedProject ? activeProjectStyle : null }>
			<h1>{project.appName}</h1>
			<img src={project.thumbnail} />
		</div>
	);
}

export default SingleProjectThumb;