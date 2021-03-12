import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import mypic from '../images/earth.jpg';

export default function NavBar() {
    return (
        <header className="bg-red-600 ">
            <div className="container mx-auto flex justify-between">
                    <NavLink
                        to='/'
                        exact
                        className="logo">
                        <img src={mypic}></img>
                    </NavLink>
                <nav classname="nav">
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
                        to='/about'
                        className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                        activeClassName="nav-link-active">
                        About Me
                    </NavLink>
                </nav>
                <div className="media-icons">
                    <SocialIcon url="https://www.linkedin.com/in/thomaswallacejr/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://twitter.com/TomWallaceJr2" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                    <SocialIcon url="https://github.com/TomWallaceJr" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                </div>
            </div>
        </header>
    )
}