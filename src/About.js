import { useState, useEffect, useRef } from 'react';
import React from 'react';
import TopLayer from './TopLayer';
import PortfolioBackground from './images/Portfolio-background.png'
import PortfolioEducation from './images/Portfolio-toplevel-education.png'
import PortfolioMetal from './images/Portfolio-toplevel-metal.png'
import PortfolioVolleyball from './images/Portfolio-toplevel-volleyball.png'
import PortfolioMusic from './images/Portfolio-toplevel-music.png'
import PortfolioTravel from './images/Portfolio-toplevel-travel.png'


function About({aboutRef}) {

	const firstUpdate = useRef(true)
  const secondUpdate = useRef(true)
	const thirdUpdate = useRef(true)
  const fourthUpdate = useRef(true)

	const aboutTraits = [
		{description: 'music aficionado', image: PortfolioMusic, paragraph: 'I am learning to be as minimalist as I can, but there is one area where I am not interested. That\'s my collection of vinyl records. In my free time, I am searching RateYourMusic for the best albums of each year and giving them a spin. My final project at the Flatiron School was building a version of Spotify for album collectors. Check it out in my projects below.'},
		{description: 'well-rounded graduate', image: PortfolioEducation, paragraph: 'My college career began with 6 hours a day of classical guitar practice. An acquaintance asked me at my senior recital if I wanted to teach with her, and I spent the next 10 years teaching in a preschool classroom, and mannying in NYC. I returned to get my master\'s in education, and was a classroom educator (with a special fondness for math) until teaching during the pandemic showed me how much I loved to create educational tech tools for my students to learn.'}, 
		{description: 'volleyball player', image: PortfolioVolleyball, paragraph: 'I often get asked where I met my wife. The answer is, of course, at the Dodge YMCA playing volleyball. And we\'re actually one of six couples that got married through playing together at the YMCA. We still love playing, but most of the time is now at the park, where our 5 year-old volleyball obsessed son can play with us as well.'},
		{description: 'world traveler', image: PortfolioTravel, paragraph: 'My wife and I have a collection of ceramic and wooden suns that we have gathered from our travels around the world that hang above the large arches in our apartment. We currently have 42 suns hanging in our home. My most treasured sun is handpainted by the amazing girl I used to babysit, who came all the way to Italy from New York to be our flower girl, and wanted to paint us one when she saw it at a shop.'},
		{description: 'heavy-metal guitarist', image: PortfolioMetal, paragraph: 'A purchase of an Ozzfest live VHS tape was my gateway into the world of heavy metal, and the beginning of my love of music. My best friends in high school and I had a band that played thrash and melodic death metal. I went through a phase where I thought I shouldn\'t listen to metal because I was grown-up. I now realize the error in my thinking, and am hoping to plug in the amp and turn it to 11 once we move out of our 1-bedroom apartment in Brooklyn. Someday.'},
	]

	const [currentTrait, setCurrentTrait] = useState(aboutTraits[0])
	const [currentTraitIndex, setCurrentTraitIndex] = useState(0)
	const [fadeInClass, setFadeInClass] = useState(true)
	const [showTopLayer, setShowTopLayer] = useState(false)
	const [triggerSecondEffect, setTriggerSecondEffect] = useState(false)
	const [triggerThirdEffect, setTriggerThirdEffect] = useState(false)
	const [triggerFourthEffect, setTriggerFourthEffect] = useState(false)
	const [resetLoop, setResetLoop] = useState(false)
	const [pauseSlides, setPauseSlides] = useState(false)
	const [checkPause, setCheckPause] = useState(false)

	const parentDiv = {
		position: 'relative',
		top: '0',
		left: '0',
		width: '100%'
	}
	const bottomLayer = {
		position: 'relative',
		top: '0',
		left: '0',
		width: '100%'
	}
	const topLayer = {
		position: 'absolute',
		top: '0',
		left: '0',
		width: '100%'
	}
	const traitStyle = {
		textShadow: '3px 3px 0px #29274C'
	}
	const changingTraitStyle = {
		fontWeight: 'bold',
		color: '#F2EE1B',
		textShadow: '3px 3px 0px #29274C'
	}

	useEffect (() => {
		const showTimeout = setTimeout(() => {
			setShowTopLayer(true)
			setTriggerSecondEffect(!triggerSecondEffect)
		}, 1000)
		return () => clearTimeout(showTimeout)
	} , [resetLoop] )


	useEffect (() => {
		if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
		}
		const secondTimeout = setTimeout(() => {
			setCheckPause(!checkPause)
		}, 4000)
		return () => clearTimeout(secondTimeout)
	} , [triggerSecondEffect] )

	useEffect (() => {
		if (fourthUpdate.current) {
      fourthUpdate.current = false;
      return;
		}
		if (pauseSlides) {
			return
		} else {
			checkForPaused()
		}
	}, [checkPause] )
	
	
		useEffect (() => {
			if (secondUpdate.current) {
				secondUpdate.current = false;
				return;
			}
			setShowTopLayer(true)
			if (!pauseSlides) {
				if (currentTraitIndex < aboutTraits.length-1) {
					setCurrentTraitIndex(currentTraitIndex + 1)
				} else { 
					setCurrentTraitIndex(0)
				}
				const thirdTimeout = setTimeout(() => {
					setTriggerFourthEffect(!triggerFourthEffect)
				}, 400)
				return () => clearTimeout(thirdTimeout)
			}
		}, [triggerThirdEffect] )


	useEffect (() => {
		if (thirdUpdate.current) {
      thirdUpdate.current = false;
      return;
    }
		setFadeInClass(true)
		setCurrentTrait(aboutTraits[currentTraitIndex])    
	
		setResetLoop(!resetLoop)
	}, [triggerFourthEffect] )

	function handlePauseSlides () {
		setPauseSlides(true)
	}

	function handleContinueSlides () {
		setPauseSlides(false)
		setTriggerThirdEffect(!triggerThirdEffect)
	}

	function checkForPaused () {
		if (!pauseSlides) {
			setShowTopLayer(false)
			setFadeInClass(false)
			setTriggerThirdEffect(!triggerThirdEffect)
		}
	}

	return (
		<div>
			<div ref={aboutRef} className='comp-about'>
				<div className='about-left'>
					<h3>Hello. I am</h3>
					<h1 style={{textAlign: 'center'}}>Christopher Ninman</h1>
						<h3>I am a </h3>
					<div className='job-descriptions'>
						<h2 style={traitStyle}> full-stack developer /</h2>
						<h2 style={traitStyle}> software engineer /</h2>
						<h2 style={changingTraitStyle}> {currentTrait.description}</h2>
					</div>
					<div className='slide-button'>
						{!pauseSlides 
								? 
							<button className='pause-button' onClick={handlePauseSlides}>TELL ME MORE</button> 
								:
							<button className='resume-button' onClick={handleContinueSlides}>CONTINUE</button> 
						}
					</div>
				</div>
				<div className='about-right' style={parentDiv}>
					<img style={bottomLayer} src={PortfolioBackground} />
					{showTopLayer ? <TopLayer topLayer={topLayer} fadeInClass={fadeInClass} currentTrait={currentTrait}/> : null }
				</div>

			</div>
			<div className='comp-about' style={{marginTop: '-10px'}}>
				{pauseSlides
						?
					<p style={{backgroundColor: '#F2EE1B'}}>{currentTrait.paragraph}</p>
						:
					<p>I am a career-changing educator with passion and talent for using technology to create inspiring educational material and websites to foster engagement and learning. My first priority is a dedication to meet all target goals, and then reaching well beyond with creative flair. Not limited to, but skilled in React, JavaScript, Rails, Ruby, and CSS, and always fascinated to learn other languages and frameworks. I am hard-working, meticulous, and creative, but above all, an empathetic, kind, and collaborative member of my surrounding community.</p>
				}
			</div>
		</div>
	);
}

export default About;