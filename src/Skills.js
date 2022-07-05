import React from 'react';
import SingleSkill from './SingleSkill.js';
import { allSkills } from './variables.js'

function Skills({skillRef}) {

	const skillsH1 = {
		backgroundColor: '#D295BF',
		marginBottom: '0px',
		marginTop: '0px',
		paddingLeft: '20px'
	}
	return (
		<div ref={skillRef}>
		<h1 style={skillsH1}>SKILLS</h1>
		<div className='comp-skills'>
			{/* <div> */}
				{/* <h1></h1> */}
				{allSkills.map(skill => (
					<SingleSkill 
						key={skill.skill}
						skill={skill}
					/>
				))}
			{/* </div> */}
		</div>
		</div>
	);
}

export default Skills;