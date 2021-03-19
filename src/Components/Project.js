import React, { useEffect, useState } from 'react';
//import project from '../../myblog/schemas/project.js';
import sanityClient from '../client.js'

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            mainImage,
            projectType,
            link,
            tags
        }`).then( data => setProjectData(data))
        .catch(console.error)
    }, []);

    return (
        <main className="">
            <section className="container mx-auto">
                <h1 className="portfolio-title mb-5 text-center text-blue-300">My Portfolio!</h1>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData && projectData.map((project, index) => (
                    <article className="max-h-500 max-w-300 bg-gray-300 bg-opacity-70 text-black-700 justify-center">
                        <h3 className="text-black text-3xl font-bold mb-2 hover:text-red-700">{
                            <a 
                            href={project.link}
                            alt={project.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            >{project.title}</a>
                        }</h3>
                        <div className="text-gray-500 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Purpose</strong>:{" "}
                                {project.place}
                            </span>
                            <img 
                            src={project.mainImage}
                            alt='project image'/>
                            <p className="my-6 text-lg text-black leading-relaxed">
                                {project.description}
                            </p>
                            <a 
                            href={project.link} 
                            rel="noopener noreferrer" 
                            target="_blank"
                            className="text-red-500 font-bold hover:underline hover:text-red-400"
                            >
                                View Project{" "}
                            <span role="img" aria-label="right-pointer">👉</span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}