import "./resume.scss"
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';


export default function Resume() {
  return (
    <div className ="resume" id="resume">
        
                <h2> My Resume</h2>
          <div className="resumeWrapper">
                 <div className="resumePar">           
                               
                        <p>I am responsible and competent at managing responsibilities in a high-volume atmosphere. 
                        I have great attention to details. I am hard worker, quick learner, and I have ability to assume responsibility.
                      </p>
                   </div>     
         
           
                <a href ="assets/My Resume.pdf" download="myResume.pdf" className="resumePdf"> Download Resume
                <PictureAsPdfOutlinedIcon className="icon"/></a>
                
                <div className="resumeImgContainer">
                       <img className="resumeImg" src="assets/myResume.jpg"></img>
                </div>
          </div>
        </div>
    
  )
}
