import { useState } from "react";
import React from 'react';

function SingleSkill({skill, skillIndex}) {

	console.log("ind: ", skillIndex)

	// const vw = Math.max((document.documentElement.clientWidth || 0, window.innerWidth || 0) *.8)
	// const vh = Math.max((document.documentElement.clientHeight || 0, window.innerHeight || 0) *.8)

	const skillAnimationClasses = ['sk1', 'sk2', 'sk3', 'sk4', 'sk5']
	const randomClassName = skillAnimationClasses[Math.floor(Math.random()* skillAnimationClasses.length)] 
	// const skillClassName = `comp-single-skill ${randomClassName}`
	const skillClassName = `comp-single-skill sk${skillIndex}`
	// const topNumber = randomTop()
	// const leftNumber = randomLeft()

	// function randomTop () {
	// 	return Math.round(Math.random() * vh) - (vh * 0.05)
	// }

	// function randomLeft () {
	// 	return Math.round(Math.random() * vw) + 50
	// }

  const [isActive, setActive] = useState("false");

  const toggleSkillClass = () => {
    setActive(!isActive);
  };

	const skillStyle = {
		width: skill.height * 1.5,
		height: skill.height * 1.5,
		// top: topNumber + 'px',
		// left: leftNumber + 'px',
		// top: '20px',
		textAlign: 'center',
		// position: 'absolute'
		// boxShadow: '#F04B1F 5px 5px, rgba(240, 75, 31, 0.3) 10px 10px, rgba(240, 75, 31, 0.2) 15px 15px, rgba(240, 75, 31, 0.1) 20px 20px, rgba(240, 75, 31, 0.05) 25px 25px'
	}

	const skillImageStyle =  {
		width: skill.height,
		height: skill.height,
		padding: skill.height / 4
	}

	return (
		<div className={isActive ? "skill-spin" : "skill-spin-again"}>
			<div onClick={toggleSkillClass} className={skillClassName} style={skillStyle}>
				<img src={skill.skillSVG} alt={skill.skill} style={skillImageStyle} />
				<h3 style={{width: '100%', textAlign: 'center', display: 'inline'}}>{skill.skill}</h3>
			</div>
		</div>
	);
}

export default SingleSkill;