import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import mypic from '../images/earth.jpg';

export default function NavBar() {
    return (
                <nav classname="navbar-nav">
                <NavLink
                        to='/'
                        exact
                        className="nav-link"
                        activeClassName="nav-link-active">
                        About Me
                    </NavLink>
                    <NavLink
                        to='/post'
                        className="nav-link"
                        activeClassName="nav-link-active">
                        Blog
                    </NavLink>
                    <NavLink
                        to='/portfolio'
                        className="nav-link"
                        activeClassName="nav-link-active">
                        Portfolio
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className="nav-link"
                        activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </nav>
                /* <div className="media-icons">
                    <SocialIcon url="https://www.linkedin.com/in/thomaswallacejr/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://twitter.com/TomWallaceJr2" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/TomWallaceJr" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div> */
           
    )
}