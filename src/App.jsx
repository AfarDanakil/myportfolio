import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import "./app.scss"
import {useState} from "react";
import Menu from "./components/menu/Menu";


function App() {
  const[menuOpen,setMenuOpen]=useState(true)
  return (
   
    <div className="app">   
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro/>
      <Projects/>
      <Resume/>
      <Blog/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;