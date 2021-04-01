import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
        {/* <div className="media-icons">
                    <SocialIcon url="https://www.linkedin.com/in/thomaswallacejr/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://twitter.com/TomWallaceJr2" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/TomWallaceJr" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div> */}
                <nav className="navbar-nav">
                <NavLink
                        to='/'
                        exact
                        className="nav-link"
                        activeClassName="active-nav">
                        Home
                    </NavLink>
                    <NavLink
                        to='/post'
                        className="nav-link"
                        activeClassName="active-nav">
                        Blog
                    </NavLink>
                    <NavLink
                        to='/portfolio'
                        className="nav-link"
                        activeClassName="active-nav">
                        Portfolio
                    </NavLink>
                </nav>
                </>
    )
}