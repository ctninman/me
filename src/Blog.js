import React from 'react';
import {blogPosts} from './variables.js'
import BlogPost from './BlogPost'

function Blog({blogRef}) {
	
	return (
		<div ref={blogRef} className='comp-blogs'>
			<h1>BLOG POSTS</h1>
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
