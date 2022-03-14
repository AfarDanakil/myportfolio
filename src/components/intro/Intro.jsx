
import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
    
            <div className="introLeft"> 
                        <div className="introLeftWrapper">
                              <h2 className="greeting">Hello There, I'm</h2>
                              <h1 className="name">Zenash Kassa</h1>                        
                                    <div className="introTitle">
                                          <div className="introTitleWrapper">
                                                <div className="titleItem">Web Developer</div>
                                                <div className="titleItem">UI/UX Designer</div>
                                                <div className="titleItem">Content Creator</div>
                                          </div>
                                    </div> 
                                    <p>I am a web developer North Carolina</p>
                                    <p>I take an interest in building responsive and modern websites</p>
                        </div>           
            </div>
            <div className="introRight">  
                  <div class="imgContainer" >
                          <img src="assets/Me.jpg" alt="Me"   className="introImg"></img>
                  </div>
            </div> 
    </div>  
    
 
  )
}
