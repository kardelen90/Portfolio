import React from 'react';

function About() {
    return (
        <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justifcenter w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-600">About</p>
                </div>
                <p className="text-xl mt-20">
                    Hello! I'm Kardelen Kaya, a Full Stack Developer. I embarked on a
                    journey in the software world, honing my full-stack development
                    skills through various projects. I have the ability to create innovative
                    solutions for each project. I value teamwork and continuously
                    strengthen my problem-solving skills.
                </p>
                <br />
                <p className="text-xl">
                    With a focus on continuous learning and development, I expand my
                    knowledge base through specific certifications and training. You can
                    find more details on my LinkedIn profile, and feel free to get in touch
                    with me.
                </p>
                <br />
                <p className="text-xl">Thank you!</p>
            </div>

        </div>
    )
}

export default About;