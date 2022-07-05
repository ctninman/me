import React from 'react';

function Contact({contactRef}) {
	return (
		<div ref={contactRef} className='comp-contact'>
			<h1>CONTACT ME</h1>
			<div className='single-contact'>
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" /> 
				<h1><a href='https://www.linkedin.com/in/christopher-ninman/'>linkedin.com/in/christopher-ninman/</a></h1>
			</div>
			<div className='single-contact'>
				<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
				<h1><a href='https://github.com/ctninman'>github.com/ctninman</a></h1>
			</div>
			<div className='single-contact'>
				<img src="https://cdn.iconscout.com/icon/free/png-256/dev-dot-to-3626951-3029359.png" />
				<h1>BLOG: <a href='https://dev.to/alternate_robot'>dev.to/alternate_robot</a></h1>
			</div>
			<div className='single-contact'>
				<img src="https://freepngimg.com/thumb/gmail/66551-suite-logo-google-email-gmail-free-transparent-image-hd-thumb.png" />
				<h1><a href='mailto: christopher.ninman@gmail.com'>christopher.ninman@gmail.com</a></h1>
			</div>
			<div className='single-contact'>
				<img src="https://www.pinpng.com/pngs/m/300-3001266_free-png-home-icon-home-house-icon-logo.png" />
				<h1>Brooklyn, NY</h1>
			</div>
			
		</div>
	);
}

export default Contact;