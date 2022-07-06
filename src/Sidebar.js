import React from 'react';

function Sidebar({aboutRef, projectRef, blogRef, skillRef, contactRef, sidebarHighlight}) {
	return (
		<div className='comp-sidebar'>
			<div>
				<h1 className={sidebarHighlight === 'about' ? 'sidebar-highlight' : 'sidebar-no-highlight'}>ABOUT</h1>
			</div>
			<div>
				<h1 className={sidebarHighlight === 'project' ? 'sidebar-highlight' : 'sidebar-no-highlight'}>PROJECTS</h1>
			</div>
			<div>
				<h1 className={sidebarHighlight === 'blog' ? 'sidebar-highlight' : 'sidebar-no-highlight'}>BLOG</h1>
			</div>
			<div>
				<h1 className={sidebarHighlight === 'skill' ? 'sidebar-highlight' : 'sidebar-no-highlight'}>SKILLS</h1>
			</div>
			<div>
				<h1 className={sidebarHighlight === 'contact' ? 'sidebar-highlight' : 'sidebar-no-highlight'}>CONTACT</h1>
			</div>
		</div>
	);
}

export default Sidebar;