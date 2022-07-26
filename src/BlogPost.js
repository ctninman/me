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
						<img src={post.image} />
						<a href={post.link} target="_blank">
						<h1>{post.title}</h1>
						</a>
					</div>
					:
					<div className='blog-flip'>
						<a style={{textDecoration: 'none'}} href={post.link} target="_blank">	
						<p>{post.introParagraph}</p>
						</a>
					</div>
			}
		</div>
	);
}

export default BlogPost;