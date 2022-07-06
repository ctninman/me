import React from 'react';
import {blogPosts} from './variables.js'
import BlogPost from './BlogPost'

function Blog({blogRef}) {

	const blogH1 = {
		color: 'rgba(242, 238, 27)',
		marginBottom: '0px',
		marginTop: '0px',
		paddingLeft: '20px',
		fontWeight: 'bold',
		textShadow: '#29274C 3px 3px'
	}
	
	return (
		<div ref={blogRef} className='comp-blogs'>
			<h1 style={blogH1}>BLOG POSTS</h1>
			{blogPosts.map (post => (
				<BlogPost 
					key={post.title}
					post={post}
				/>
			))}
		</div>
	);
}

export default Blog;
