
import React from "react";
import CardOne from '../components/CardOne';
import CardTwo from '../components/CardTwo';
import CardThree from '../components/CardThree';

const Projects = () => {
    return (
        <div id="projects" className="container mx-auto mt-16 flex flex-col items-center lg:mt-8">
            <h2 className=" title text-3xl font-bold text-orange-400 mb-10">Projects</h2>
            <div className="flex flex-wrap justify-around w-full max-w-screen-lg">
                <div className="mb-8">
                    <CardOne />
                </div>
                <div className="mb-8">
                    <CardTwo />
                </div>
                <div className="mb-8">
                    <CardThree />
                </div>
            </div>

            <div className="ver-mas">
                <a href="/AllProjects">
                    <h2 className="text-green-300 mt-3 mb-5">Ver más</h2>
                </a>
            </div>
            
        </div>
    );
};

export default Projects;
