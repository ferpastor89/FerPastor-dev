import React from "react";
import CardOne from '../components/CardOne';
import CardTwo from '../components/CardTwo';
import CardThree from '../components/CardThree';
import CardFour from '../components/CardFour';

const Projects = () => {
    return (
        <div className="container mx-auto mt-16 flex flex-col items-center lg:mt-8">
            <h2 className="text-3xl font-bold text-yellow-400 mb-10">Projects</h2>
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
                <div className="mb-8">
                    <CardFour />
                </div>
            </div>
        </div>
    );
};

export default Projects;
