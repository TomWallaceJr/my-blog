import React from 'react';
import wsopme from '../images/wsopme.jpg';
import NavBar from './NavBar';

export default function Header() {
    return (
        <header className='header'>
            <section className='intro'>
                <h1 className='intro-title'><strong>Thomas Wallace Jr.</strong></h1>
                <p className='intro-subtitle'>Full Stack Web Developer</p>
                <img src={wsopme} alt="picture of tom" className='intro-img'></img>
            </section>
            <NavBar />
        </header>
    )
}
