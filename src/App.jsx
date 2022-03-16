import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

/* importing pages*/
import Home from './pages/home';
import ErrorPage from "./pages/errorPage/errorPage";



function App() {
 
  return (   
    <Router> 
        <Navbar /> 
        <Routes>  
              <Route path='/' element ={<Home />} />              
              <Route path='/about' element ={<Intro/>} />    
              <Route path='/projects' element ={<Projects />} />    
              <Route path='/resume' element ={<Resume />} />    
              <Route path='/blog' element ={<Blog />} />     
              <Route path='/contact' element ={<Contact />} />
              <Route path='*' element ={<ErrorPage />} />
        </Routes>    
      </Router>

  );
}

export default App;
