import "./projects.scss"


export default function Projects() {
  return (
     
    <div className = "projects" id ="projects">      
            <h1>Projects</h1>
            <div className="cardWrapper">
              
                  <div className="card">
                  <div className="cardBody">
                        <img className="cardImg" src="assets/addisAbaba.jpg" alt=""></img>
                        <h2 className="cardTitle">proj1</h2>
                        <p className="cardDescription">Project 1 Description</p>
                        <button className="cardBtn">View Website</button>
                  </div>
                  </div>


                  <div className="card">
                  <div className="cardBody">
                        <img className="cardImg" src="assets/coffee.jpg" alt=""></img>
                        <h2 className="cardTitle">proj1</h2>
                        <p className="cardDescription">Project 1 Description</p>
                        <button className="cardBtn">View Website</button>
                  </div>
                  </div>


                  <div className="card">
                  <div className="cardBody">
                        <img className="cardImg" src="assets/Biltmore.jpg" alt=""></img>
                        <h2 className="cardTitle">proj1</h2>
                        <p className="cardDescription">Project 1 Description</p>
                        <button className="cardBtn">View Website</button>
                  </div>
                  </div>


                  <div className="card">
                  <div className="cardBody">
                        <img className="cardImg" src="assets/peakFitness.jpg" alt=""></img>
                        <h2 className="cardTitle">proj1</h2>
                        <p className="cardDescription">Project 1 Description</p>
                        <button className="cardBtn">View Website</button>
                  </div>
                  </div>


            </div>   
                       
            
    </div>
  )
}
