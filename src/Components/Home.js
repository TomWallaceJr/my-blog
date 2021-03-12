import React from 'react'

export default function Home() {
    return (
        <main>
        <section className='about-section'>
            <h2 className= 'about-title'>About Me</h2>
            <p>I am a Web Developer born, raised, and currently living in Wilkes-barre/Scranton
                PA. (Yes that Scranton) Ten years experience in the casino industry gifted me with exceptional 
                customer service, communication, and interpersonal skills. I recently obtained my Certificate of
                Completion from Thinkfuls' Remote Engineering Immersion Program and am now seeking a remote position 
                with a strong, collaborative, and supportive team where I can gain some mentorship, learn new skills, and 
                hone the ones I currently have. </p>

                <p>I am most comfortable coding in JavaScript and my current tech stack of choice is 
                    PERN (PostgreSQL, Express, React, Node) but I am always open to learning new technologies.</p>

                <p>When I am not at a computer, I love spending time outdoors with my wife and son, sports, and playing poker. 
                    I am also a finance/economics nerd and have lately been fascinated by Bitcoin and blockchain technology.
                </p>
        </section>
        <section className='technical-skills-section'>
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
                <li>Jest, Mocha, Chai</li>
                <li>Vercel</li>
                <li>Heroku</li>
            </ul>
            </div>
        </section>
        <section className='core-values-section'>
            <h2 className='core-values-title'>My Core Values</h2>
            <div className='value'>
                <h3 className='core-value-subtitles'>Value 1</h3>
                <p>Short Paragraph talking about this value. These values will be unique to
                    me and should reflect how I live my life.
                </p>
            </div>
            <div className='value'>
                <h3 className='core-value-subtitles'>Value 2</h3>
                <p>Short Paragraph talking about this value. These values will be unique to
                    me and should reflect how I live my life.
                </p>
            </div>
            <div className='value'>
                <h3 className='core-value-subtitles'>Value 3</h3>
                <p>Short Paragraph talking about this value. These values will be unique to
                    me and should reflect how I live my life.
                </p>
            </div>
            <div className='value'>
                <h3 className='core-value-subtitles'>Value 4</h3>
                <p>Short Paragraph talking about this value. These values will be unique to
                    me and should reflect how I live my life.
                </p>
            </div>
        </section>
        </main>
    )
}
