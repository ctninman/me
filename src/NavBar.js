import React from 'react';

function NavBar({aboutRef, projectRef, blogRef, skillRef, contactRef}) {

	// const handleScroll = (ref) {
	// 	blogRef.current.scrollIntoView({ behavior: 'smooth' })
	// }

	// const scrollToElement = () => blogRef.current.scrollIntoView();

	return (
		<div className='comp-navbar'>
			<div onClick={() => aboutRef.current.scrollIntoView({behavior: "smooth"})}>
				<h2>ABOUT</h2>
			</div>
			<div>
				<h3>|</h3>
			</div>
			<div onClick={() => projectRef.current.scrollIntoView({behavior: "smooth"})}>
				<h2>PROJECTS</h2>
			</div>
			<div>
				<h3>|</h3>
			</div>
			<div onClick={() => blogRef.current.scrollIntoView({behavior: "smooth"})}>
				<h2>BLOG</h2>
			</div>
			<div>
				<h3>|</h3>
			</div>
			<div onClick={() => skillRef.current.scrollIntoView({behavior: "smooth"})}>
				<h2>SKILLS</h2>
			</div>
			<div>
				<h3>|</h3>
			</div>
			<div onClick={() => contactRef.current.scrollIntoView({behavior: "smooth"})}>
				<h2>CONTACT</h2>
			</div>
		</div>
	);
}

export default NavBar;