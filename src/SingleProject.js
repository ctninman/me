import React, { useState } from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import Features from './Features'
import Tools from './Tools'
import Story from './Story';

function SingleProject({displayedProject, selectedView, setSelectedView}) {

	// const [selectedView, setSelectedView] = useState('video')

	return (
		<div className='single-project'>
			<img className='project-logo' src={displayedProject.logo} />
			<div className='project-details'>
				<div className='project-sidebar'>
					<button onClick={() => setSelectedView('story')}>Story</button>
					<button onClick={() => setSelectedView('video')}>Video</button>
					<button onClick={() => setSelectedView('features')}>Features</button>
					<button onClick={() => setSelectedView('tools')}>Tools</button>
				</div>
				<div className='project-main'>
					{selectedView === 'video' ? <YoutubeEmbed embedId={displayedProject.youtubeEmbedID} /> : null }
					{selectedView === 'features' ? <Features displayedProject={displayedProject}/> : null}
					{selectedView === 'tools' ? <Tools displayedProject={displayedProject}/> : null}
					{selectedView === 'story' ? <Story displayedProject={displayedProject}/> : null}
				</div>
			</div>	
			{/* <img style={{width: '90%', marginLeft: '5%'}} src={project.thumbnail} /> */}
		</div>
	);
}

export default SingleProject;