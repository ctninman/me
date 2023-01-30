import React from 'react';

function SingleProjectThumb({project, setDisplayedProject, displayedProject, setSelectedView}) {

	const activeProjectStyle = {
		border: '3px solid #8C8C8C',
		boxSizing: 'border-box'
	}

	const inactiveProjectStyle = {
		border: '2px solid #F04B1F',
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
				style={project === displayedProject ? activeProjectStyle : inactiveProjectStyle }>
			<h1>{project.appName}</h1>
			<img alt='project name' src={project.thumbnail} />
		</div>
	);
}

export default SingleProjectThumb;