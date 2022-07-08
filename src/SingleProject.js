import React, { useState } from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import Features from './Features'
import Tools from './Tools'
import Story from './Story';

function SingleProject({displayedProject, selectedView, setSelectedView}) {

	const [selectedViewButton, setSelectedViewButton] = useState('story')

	return (
		<div className='single-project'>
			<div className='project-logo-container'>
				<div className='github-link'>
					<a src={displayedProject.gitHubLink}><img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/></a>
				</div>
				<div className='project-logo'>
					<img src={displayedProject.logo} />
				</div>
				<div className='deploy-link'>
					<a src={displayedProject.deployedSite}><img src='https://www.freepnglogos.com/uploads/logo-website-png/logo-website-world-wide-web-the-internet-know-your-meme-7.png'/></a>
				</div>
			</div>
			<div className='project-details'>
				<div className='project-sidebar'>
					<button className={selectedView === 'story' ? 'select-project-view' : 'sidebar-button'} onClick={() => setSelectedView('story')}>STORY</button>
					<button className={selectedView === 'video' ? 'select-project-view' : 'sidebar-button'} onClick={() => setSelectedView('video')}>VIDEO</button>
					<button className={selectedView === 'features' ? 'select-project-view' : 'sidebar-button'} onClick={() => setSelectedView('features')}>FEATURES</button>
					<button className={selectedView === 'tools' ? 'select-project-view' : 'sidebar-button'} onClick={() => setSelectedView('tools')}>TOOLS</button>
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