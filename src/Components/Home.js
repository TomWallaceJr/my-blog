import React from 'react'

export default function Home() {
    return (
        <main>
        <section className='about-section'>
            <h2 className= 'about-title'>About Me</h2>
            <p>I am a Web Developer born, raised, and currently living in Wilkes-barre/Scranton
                PA. I am most comfortable coding in JavaScript, and my current tech stack of choice is 
                PERN (PostgreSQL, Express, React, Node) but I am always open to learning new frameworks and technologies.</p>
                
                <p>Ten years experience in the casino industry gifted me with exceptional 
                customer service, communication, and interpersonal skills. I recently obtained my Certificate of
                Completion from Thinkfuls's Remote Engineering Immersion Program and am now seeking a remote position 
                with a strong, collaborative, and supportive team where I can gain some mentorship, learn new skills, and 
                improve my current ones. </p>

                
                <p>When I am not at a computer, I love spending time outdoors with my wife and son, sports, and playing poker. 
                    I am also a finance/economics enthusiast and have lately been fascinated by Bitcoin and blockchain technology.
                </p>
        </section>
        {/* <section className='technical-skills-section'>
            <h2 className='technical-skills-title'>Technical Skills</h2>
            <div>
            <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript ES6</li>
                <li>React</li>
                <li>jQuery</li>
                <li>Node</li>
                </ul>
            <ul>
                <li>Express</li>
                <li>Knex.js</li>
                <li>SQL</li>
                <li>PostgreSQL</li>
                <li>RESTful APIs</li>
                <li>Git/Github</li>
            </ul>
            <ul>
                <li>Sanity.io</li>
                <li>C#</li>
                <li>JAVA</li>
                <li>Jest</li>
                <li>Vercel</li>
                <li>Heroku</li>
            </ul>
            </div>
        </section> */}
        <section className='core-values-section'>
            <h2 className='core-values-title'>My Core Values</h2>
            <article>
            <div className='value'>
                <h3 className='core-value-subtitles'>Kindness</h3>
                <p>In a world where social media is giving us a convenience no generation before us
                    ever had, many use it to spew hatred and be downright vicious to one another.
                    I am undersanding, empathetic, and kind to everyone. 
                </p>
            </div>
            <div className='value'>
                <h3 className='core-value-subtitles'>Service</h3>
                <p>I've been in the service industry since I was 14 years old working at a local restaraunt as a busboy, 
                    and I also love helping people. 
                </p>
            </div>
            <div className='value'>
                <h3 className='core-value-subtitles'>Determination</h3>
                <p>I've got an all-in attitude. When I make a decision and set my mind to do something I do it. <strong>PERIOD.</strong>
                </p>
            </div>
            <div className='value'>
                <h3 className='core-value-subtitles'>Growth</h3>
                <p>I love learning new skills and technologies and am constantly trying to better myself.
                    I am always looking to learn something new or hone my current abilities. I am always sharpening my axe.
                </p>
            </div>
            </article>
        </section>
        </main>
    )
}
