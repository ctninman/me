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
					<img style={{width: '150px'}} src={post.image} />
					<h1>{post.title}</h1>
				</div>
					:
				<div className='blog-flip'>
					<p>{post.introParagraph}</p>
				</div>
			}
		</div>
	);
}

export default BlogPost;