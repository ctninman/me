import React from 'react';

function Sidebar({aboutRef, projectRef, blogRef, skillRef, contactRef}) {
	return (
		<div className='comp-sidebar'>
			<div>
				<h1>ABOUT</h1>
			</div>
			<div>
				<h1>PROJECTS</h1>
			</div>
			<div>
				<h1>BLOG</h1>
			</div>
			<div>
				<h1>SKILLS</h1>
			</div>
			<div>
				<h1>CONTACT</h1>
			</div>
		</div>
	);
}

export default Sidebar;