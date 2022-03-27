import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './Navbarelements';

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to ="/">
                <h1 className="myName">Zenash Kassa</h1>
                
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/about" activeStyle>
                  About
              </NavLink>
              <NavLink to="/projects" activeStyle>
                  Projects
              </NavLink>
              <NavLink to="/resume" activeStyle>
                  Resume
              </NavLink>
              <NavLink to="/blog" activeStyle>
                  Blog
              </NavLink>
              <NavLink to="/Contact" activeStyle>
                  Contact
              </NavLink>
        </NavMenu>
        
    </Nav>
    </>
  );
};

export default Navbar