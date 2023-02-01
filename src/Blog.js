import React from 'react';
import {blogPosts} from './variables.js'
import BlogPost from './BlogPost'

function Blog({blogRef}) {

	const blogH1 = {
		// color: '#0B0909',
		backgroundColor: '#000000',
		color: '#ffffff',
		marginBottom: '0px',
		marginTop: '0px',
		paddingLeft: '20px',
		fontWeight: 'bold',
		textShadow: '#F04B1F 2px 2px'
	}
	
	
	return (
		<>
		<div className='ref-helper-purple'></div>
		<div ref={blogRef} className='comp-blogs'>
			<h1 style={blogH1}>BLOG POSTS</h1>
			{blogPosts.map (post => (
				<BlogPost 
					key={post.title}
					post={post}
				/>
			))}
		</div>
		</>
	);
}

export default Blog;
