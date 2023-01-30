import React from 'react';

function Contact({contactRef}) {

	const contactH1 = {
		color: '#0B0909',
		marginBottom: '0px',
		marginTop: '0px',
		paddingLeft: '20px',
		fontWeight: 'bold',
		textShadow: '#F04B1F 3px 3px'
	}

	return (
		<div ref={contactRef} className='comp-contact'>
			<h1 style={contactH1}>CONTACT ME</h1>
			<div className='single-contact'>
				<img alt="LinkedIn Link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /> 
				<h1><a href='https://www.linkedin.com/in/christopher-ninman/'>linkedin.com/in/christopher-ninman/</a></h1>
			</div>
			<div className='single-contact'>
				<img alt="Github Link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
				<h1><a href='https://github.com/ctninman'>github.com/ctninman</a></h1>
			</div>
			<div className='single-contact'>
				<img alt="Blog Link" src="https://cdn.iconscout.com/icon/free/png-256/dev-dot-to-3626951-3029359.png" />
				<h1>BLOG: <a href='https://dev.to/alternate_robot'>dev.to/alternate_robot</a></h1>
			</div>
			<div className='single-contact'>
				<img alt="Email Link" src="https://freepngimg.com/thumb/gmail/66551-suite-logo-google-email-gmail-free-transparent-image-hd-thumb.png" />
				<h1><a href='mailto: christopher.ninman@gmail.com'>christopher.ninman@gmail.com</a></h1>
			</div>
			<div className='single-contact'>
				<img alt="LinkedIn Link" src="https://toppng.com/uploads/preview/open-bandcamp-logo-white-11562938577ooqpoam563.png" />
				<h1><a href='https://christopherninman.bandcamp.com/'>christopherninman.bandcamp.com</a></h1>
			</div>
			<div className='single-contact'>
				<img alt="Located in:" src="https://www.pinpng.com/pngs/m/300-3001266_free-png-home-icon-home-house-icon-logo.png" />
				<h1>Brooklyn, NY</h1>
			</div>
			<div className='single-contact'>
				<iframe title="My Music on Bandcamp" style={{border: '0', width: '100%', height: '120px', borderRadius: '5px'}} src="https://bandcamp.com/EmbeddedPlayer/album=3270040406/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://christopherninman.bandcamp.com/album/fragments">Fragments by Christopher Ninman</a></iframe>
			</div>
			
		</div>
	);
}

export default Contact;