import Navbar from "./components/Navbar";
import {BrowserRouter,Route,Routes,Link}from 'react-router-dom'
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Inform from "./components/Inform";
// import Footer from "./components/Footer";


import './App.css'

function App() {
  

  return (
    <>

     {/* <Navbar />
      <Hero />
      <About />
      <Projects />
      <Inform /> */}

      <BrowserRouter>
      <nav> 
        <Link to="Hero">Hero</Link>

        <Link to="about">About</Link>
        <Link to="Project">Project</Link>
        <Link to="Inform">Inform</Link>
        
      </nav>


      <Routes>
        <Route path="/"element={<Navbar/>}/>
        <Route path="/Hero"element={<Hero/>}></Route>
        <Route path="/about"element={<About/>}></Route>
        <Route path="/Project"element={<Projects/>}></Route>
        <Route path="/Inform"element={<Inform/>}></Route>

        
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
