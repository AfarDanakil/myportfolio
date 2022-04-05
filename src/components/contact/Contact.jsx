import "./contact.scss"


export default function Contact() {
  return (  
  
   <div class="flex-container" className="contact" id="contact">
        <h2>Get In Touch</h2>
       
       
    <div className="contactBox">
             <form  class="row g-3" action="https://formsubmit.co/1b1a03fdd32f9a7874f6cac4106a0956" method="POST">
                 <div class="col-md-6">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="text" class="form-control" name="name" id="firstName" required></input>
                  </div>

                  <div class="col-md-6">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input tyype="text" class="form-control"name="last&nbsb;Name" id="lastName" required></input>
                  </div>

                  <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input tyype="text" class="form-control" name="email" id="email" required></input>
                  </div>

                  <div class="col-md-12">                   
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" name="Your&nbsb;Message"id="comments" rows="3"required></textarea>
                  </div>

                  <div class="col-md-12">                  
                  <button type="submit" class="formBtn">Submit</button>
                  </div>             
             </form>
             
         </div>    
            
        
      </div>
       
       
      
   
  

  );
}
