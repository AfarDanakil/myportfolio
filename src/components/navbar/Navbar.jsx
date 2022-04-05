import React, {useState} from 'react'
import ReorderIcon from "@material-ui/icons/Reorder"





function Navbar() {
    const [showLinks, setShowLinks]= useState(false);
  return (  
    <div className="Navbar">
        <div className="leftSide">
         
          
          <h1 className="logo"><a href="/">Zenash Kassa</a></h1>

        </div>

        <div className="rightSide">
            <div className="links" id={showLinks ? "hidden" :  ""}>
                <a href="/about">About</a>
                <a href="/projects">Projects</a>
                <a href="/resume">Resume</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </div>
            <button onClick={() =>setShowLinks(!showLinks)}>
              {" "} 
              <ReorderIcon /></button>
        </div>
      
    </div>
  ); 
}

export default Navbar