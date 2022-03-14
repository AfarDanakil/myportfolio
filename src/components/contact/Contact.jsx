
import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact" id="contact">
     <h2>Contact Me</h2>
          <div class="contact-box">
              <form>
                <input type="text" class="input-field" placeholder="Your Name"></input>
                <input type="email" class="input-field" placeholder="Your Email"></input>
                <input type="text" class="input-field" placeholder="Subject"></input>
                <textarea type="text" class="input-field textarea-field" placeholder="your message">
                </textarea>
                <button type="button" class="btn">Send Message</button>
              </form>
          </div>
    
    </div>
  )
}
