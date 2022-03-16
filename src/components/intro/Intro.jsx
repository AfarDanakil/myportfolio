
import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">    
            <div class="imgContainer" >
                  <img src="assets/Me.jpg" alt="Me"   className="introImg"></img>
            </div>                              
           
            <div className="introItem">
                  
                  <p className="greeting">Hello There, I'm</p>
                  <h2 className="name">Zenash C Kassa</h2>                     
                  
                  <h5 className="title">Web Developer</h5>
                  <h5 className="title">UI/UX Designer</h5>
                  <h5 className="title" >Content Creator</h5>  
                  

                  <div className="introPar">      
                        <p>I take an interest in building responsive and modern websites</p>
                        <p>Look at some of my Projects including this Portfolio website built using Reactjs</p>
                        <p>Read my Blog</p><p>Follow me on Linkedin and Github</p> 
                  </div>

             </div>
             
            
      </div>            
      )
}
