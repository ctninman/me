import { useRef } from 'react'
import NavBar from "./NavBar"
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

  return (
    <main >
      <title>Christopher Ninman</title>
      <NavBar 
        aboutRef={aboutRef}
        projectRef={projectRef}
        blogRef={blogRef}
        skillRef={skillRef}
        contactRef={contactRef}
      />
      <Sidebar         
        aboutRef={aboutRef}
        projectRef={projectRef}
        blogRef={blogRef}
        skillRef={skillRef}
        contactRef={contactRef}
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
