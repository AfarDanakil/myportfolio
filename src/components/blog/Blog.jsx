import "./blog.scss"

export default function Blog() {
  return (
    <div className="blog" id="blog">
    <h2>My blog</h2>
            <div className="blogWrapper">
                  <div className="par">
                      <p>Check out my posts</p>
                      <p>I share tech news and technology resources</p> 
                      <p>for web developers, web designers, and digital marketers</p>
                  </div>
                  <div className="blogLink">
                      <a href="https://webdevelperdotblog.wordpress.com/">   
                      <button className="blogBtn">Visit my blog</button>
                    </a>  
                  </div>
            </div>
      </div>

  )
}
