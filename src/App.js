import { useRef, useEffect, useState } from 'react'
// import NavBar from "./NavBar"
import About from "./About"
import Projects from "./Projects"
import Blog from "./Blog"
import Skills from "./Skills"
import Contact from "./Contact"
import './index.css'
import Sidebar from "./Sidebar"

function App() {
  const aboutRef = useRef()
  const projectRef = useRef()
  const blogRef = useRef()
  const skillRef = useRef()
  const contactRef = useRef()
  const firstUpdate = useRef()

  // const [blogIsVisible, setBlogIsVisible] = useState()
  const [sidebarHighlight, setSidebarHighlight] = useState('about')

  useEffect (() => {
    document.title = "Christopher Ninman"
  }, [] )

  useEffect (() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    observeRefs(aboutRef)
    observeRefs(projectRef)
    observeRefs(blogRef)
    observeRefs(skillRef)
    observeRefs(contactRef)
  }, [] )

  function observeRefs (ref) {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      console.log('entry', entry)
      console.log('ref', ref)
      if (entry.isIntersecting === true) {
        if (ref.current.className === 'comp-about') {
          setSidebarHighlight('about')
        } else if (ref.current.className === 'comp-project') {
          setSidebarHighlight('project')
        } else if (ref.current.className === 'comp-blogs') {
          setSidebarHighlight('blog')
        } else if (ref.current.className === 'comp-skill') {
          setSidebarHighlight('skill')
        } else if (ref.current.className === 'comp-contact') {
          setSidebarHighlight('contact')
        }
      }
    })
    observer.observe(ref.current)
  }

  return (
    <main >
      <title>Christopher Ninman</title>
      {/* <NavBar 
        aboutRef={aboutRef}
        projectRef={projectRef}
        blogRef={blogRef}
        skillRef={skillRef}
        contactRef={contactRef}
      /> */}
      <Sidebar         
        aboutRef={aboutRef}
        projectRef={projectRef}
        blogRef={blogRef}
        skillRef={skillRef}
        contactRef={contactRef}
        sidebarHighlight={sidebarHighlight}
        setSidebarHighlight={setSidebarHighlight}
      />
      <div className='page-style'>
        <About aboutRef={aboutRef}/>
        <Projects projectRef={projectRef}/>
        <Blog blogRef={blogRef}/>
        <Skills skillRef={skillRef}/>
        <Contact contactRef={contactRef}/>
      </div>
    </main>
  )
}

export default App;
