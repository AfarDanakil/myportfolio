import "./topbar.scss"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';

export default function Topbar({menuOpen, setMenuOpen}) {

  return (
    <div className= {"topbar " + (menuOpen && "active")}>
      
      <div className="wrapper">
          <div className="left">            
          <a href="#intro" className="logo">Portfolio</a>
          <div className="itemContainer">
            <MailOutlineIcon className="icon"/>
            <span>zkassa@gmail.com</span>
          </div>
          <div className="itemContainer">
            <PersonOutlinedIcon className="icon"/>
            <span>+77 123 456</span>
          </div>
          </div>          
                        
        <div className="right">

            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div> 
        </div>
    </div>
  </div>
  );
}
