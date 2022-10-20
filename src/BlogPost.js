import React, {useState} from 'react';

function BlogPost({post}) {

	const [blogHover, setBlogHover] = useState (false)

	function handleMouseEnter () {
		setBlogHover(true)
	}
	
	function handleMouseLeave () {
		setBlogHover(false)
	}

	return (
		<div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='blog-post'>
			{!blogHover 
					? 
					<div className='blog-thumb'>
						<img alt='blog post title' src={post.image} />
						<a rel='noreferrer' href={post.link} target="_blank">
						<h1 style={{color: '#0B0909'}}>{post.title}</h1>
						</a>
					</div>
					:
					<div className='blog-flip'>
						<a rel='noreferrer' style={{textDecoration: 'none'}} href={post.link} target="_blank">	
						<p>{post.introParagraph}</p>
						</a>
					</div>
			}
		</div>
	);
}

export default BlogPost;