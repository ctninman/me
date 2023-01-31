import React from 'react';

function Contact({contactRef}) {

	const contactH1 = {
		color: '#0B0909',
		marginBottom: '0px',
		marginTop: '0px',
		paddingLeft: '20px',
		fontWeight: 'bold',
		textShadow: '#F04B1F 2px 2px'
	}

	return (
		<div ref={contactRef} className='comp-contact'>
			<h1 style={contactH1}>CONTACT ME</h1>
			<div className='social-container'>
				<div className='single-contact sc1'>
				<a href='https://www.linkedin.com/in/christopher-ninman/'>
						<img alt="LinkedIn Link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /> 
					</a>
				</div>
				<div className='single-contact sc2'>
				<a href='https://github.com/ctninman'>
						<img alt="Github Link" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
					</a>
				</div>
				<div className='single-contact sc3'>
				<a href='https://dev.to/alternate_robot'>	
						<img alt="Blog Link" src="https://cdn.iconscout.com/icon/free/png-256/dev-dot-to-3626951-3029359.png" />
					</a>
				</div>
				<div className='single-contact sc4'>
				<a href='mailto: christopher.ninman@gmail.com'>
						<img alt="Email Link" src="https://freepngimg.com/thumb/gmail/66551-suite-logo-google-email-gmail-free-transparent-image-hd-thumb.png" />
					</a>
				</div>
				<div className='single-contact sc5'>
				<a href='https://christopherninman.bandcamp.com/'>
					<img alt="LinkedIn Link" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Bandcamp-button-square-green.svg/1200px-Bandcamp-button-square-green.svg.png" />
				</a>
				</div>
			</div>	
			<div className='bandcamp' style={{marginLeft: 'auto', marginRight: 'auto'}}>
				<iframe title="My Music on Bandcamp" style={{ padding: '10px', border: '10px', width: '80%', height: '120px'}} src="https://bandcamp.com/EmbeddedPlayer/album=3270040406/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://christopherninman.bandcamp.com/album/fragments">Fragments by Christopher Ninman</a></iframe>
			</div>
		</div>
	);
}

export default Contact;