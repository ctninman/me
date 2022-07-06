import React, {useState} from 'react';
import { allProjects } from './variables';
import SingleProject from './SingleProject';
import SingleProjectThumb from './SingleProjectThumb';

function Projects({projectRef}) {

	const [displayedProject, setDisplayedProject] = useState(allProjects[0])
	const [selectedView, setSelectedView] = useState('story')

	const projectDiv = {
		backgroundColor: '#D295BF'
	}
	const projecth1 ={
		marginTop: '0px',
		marginBottom: '0px',
		paddingLeft: '20px'

	}

	return (
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
	);
}

export default Projects;