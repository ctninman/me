import React, {useState} from 'react';
import { allProjects } from './variables';
import SingleProject from './SingleProject';
import SingleProjectThumb from './SingleProjectThumb';

function Projects({projectRef}) {

	const [displayedProject, setDisplayedProject] = useState(allProjects[0])
	const [selectedView, setSelectedView] = useState('story')

	const projectDiv = {
		backgroundColor: '#ebebeb',
		// borderBottom: '3px solid black'
	}
	const projecth1 ={
		backgroundColor: '#000000',
		// color: '#0B0909',
		color: '#ffffff',
		marginBottom: '0px',
		marginTop: '0px',
		paddingLeft: '20px',
		fontWeight: 'bold',
		textShadow: '#F04B1F 2px 2px'
	}

	return (
		<>
			<div className='ref-helper-pink'></div>
			<div ref={projectRef} className='comp-project' style={projectDiv}>
				<h1 style={projecth1}>MY PROJECTS</h1>
				<div className='comp-projects'>
					{allProjects.map(project => (
						<SingleProjectThumb 
							key={project.appName} 
							project={project}
							displayedProject={displayedProject}
							setDisplayedProject={setDisplayedProject}
							selectedView={selectedView}
							setSelectedView={setSelectedView}
						/>
					))}
				</div>
				<SingleProject 
					displayedProject={displayedProject}
					selectedView={selectedView}
					setSelectedView={setSelectedView}
				/>
			</div>
		</>
	);
}

export default Projects;