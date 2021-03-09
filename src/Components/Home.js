import React from 'react';
import image from '../images/earth.jpg';

export default function Home() {
    return (
        <main>
            <img src={image} alt="earth" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-4xl text-green-200 font-bold cursive home-name">Hello! I'm Tom</h1>
            </section>
        </main>
    )
}