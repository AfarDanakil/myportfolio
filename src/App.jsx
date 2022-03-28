import Portfolio from "./components/portfolio/Portfolio";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import "./app.scss";
import NavBar from "./components/navNav/NavBar";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* importing pages*/

import ErrorPage from "./pages/errorPage/errorPage";

function App() {
 
  return (    
    
      <Router> 
        <NavBar /> 
        <Routes>  
              <Route path='/'element ={<Portfolio />} />              
              <Route path='/about' element ={<Intro/>} />    
              <Route path='/projects' element ={<Projects />} />    
              <Route path='/resume' element ={<Resume />} />    
              <Route path='/blog' element ={<Blog />} />     
              <Route path='/contact' element ={<Contact />} />
              <Route path='*' element ={<ErrorPage />} />
        </Routes>  
        <Footer />  
      </Router>
    


  );
}

export default App;
