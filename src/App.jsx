import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Work from './components/work/Work'
import Skills from './components/skills/Skills'
import Volunteer from './components/volunteer/Volunteer'
import Teacher from './components/teacher/Teacher'
import Class from './components/classroom/Class'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import './App.css'

function App() {

  return (
   <div>
      <Navbar/>
      <Home/>
      <About/>
      <Work/>
      <Skills/>
      <Volunteer/>
      <Teacher/>
      <Class/>
      <Contact/>
      <Footer/>
   </div>
  )
}

export default App
