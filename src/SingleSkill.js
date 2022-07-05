import React from 'react';

function SingleSkill({skill}) {

	const vw = Math.max((document.documentElement.clientWidth || 0, window.innerWidth || 0) *.8)
	const vh = Math.max((document.documentElement.clientHeight || 0, window.innerHeight || 0) *.8)

	const skillAnimationClasses = ['sk1', 'sk2', 'sk3', 'sk4', 'sk5']
	const randomClassName = skillAnimationClasses[Math.floor(Math.random()* skillAnimationClasses.length)] 
	const skillClassName = `comp-single-skill ${randomClassName}`
	const topNumber = randomTop()
	const leftNumber = randomLeft()

	console.log(skill.skill, 'tn', topNumber, 'ln', leftNumber)
	console.log('className', randomClassName)

	function randomTop () {
		return Math.round(Math.random() * vh) - (vh * 0.05)
	}

	function randomLeft () {
		return Math.round(Math.random() * vw) + 50
	}

	const skillStyle = {
		width: skill.height * 1.5,
		height: skill.height * 1.5,
		top: topNumber + 'px',
		left: leftNumber + 'px',
		// top: '20px',
		textAlign: 'center',
		position: 'absolute'
	}

	const skillImageStyle =  {
		width: skill.height,
		height: skill.height,
		padding: skill.height / 4
	}

	return (
		<div className={skillClassName} style={skillStyle}>
			<img src={skill.skillSVG} alt={skill.skill} style={skillImageStyle} />
			<h3 style={{width: '100%', textAlign: 'center', display: 'inline'}}>{skill.skill}</h3>
		</div>
	);
}

export default SingleSkill;