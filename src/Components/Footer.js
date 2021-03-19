import React from 'react';
import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    return (
        <footer id='contact' className='footer'>
            <div className="media-icons">
                    <SocialIcon url="https://www.linkedin.com/in/thomaswallacejr/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 50, width: 50 }} />
                    <SocialIcon url="https://twitter.com/TomWallaceJr2" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 50, width: 50 }} />
                    <SocialIcon url="https://github.com/TomWallaceJr" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 50, width: 50 }} />
                </div>
        </footer>
    )
}
