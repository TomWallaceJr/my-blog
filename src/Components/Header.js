import React from 'react';
import wsopme from '../images/wsopme.jpg';

export default function Header() {
    return (
        <header className="header">
            <section>
                <h1 className='intro'>Hi, I Am <strong>Tom Wallace.</strong></h1>
                <p className='subtitle'>Full Stack Dev</p>
                <img src={wsopme} alt="picture of tom" className='header-image'></img>
            </section>
        </header>
    )
}
