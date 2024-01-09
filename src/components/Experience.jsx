import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import python from "../assets/python.png";
import django from "../assets/django.png";
import sql from "../assets/sql.png";

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: html,
           
        },
        {
            id: 2,
            src: css,
           
        },
        {
            id: 3,
            src: javascript,
    
        },
        {
            id: 4,
            src: react,
            
        },
        {
            id: 5,
            src: tailwind,
            
        },
        {
            id: 6,
            src: bootstrap,
           
        },
        {
            id: 7,
            src: python,
           
        },
        {
            id: 8,
            src: django,
           
        },
        {
            id: 9,
            src: sql,
            
        },
    ];

   return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
          {techs.map(({ id,src}) => (
            <div
            class=" w-24 sm:w-32 aspect-square items-center justify-center flex to-gray-900 group shadow-gray-700 shadow-md"
            >
            <div
               key={id}
               >
              <img src={src} alt="" className="group-hover:ease-in-out  duration-700 group-hover:duration-1000 cursor-pointer object-center object-cover group-hover:scale-110 sm:group-hover:scale-150 w-16 sm:w-24 aspect-square rotate-0 group-hover:-rotate-[360deg]  group-hover:-translate-y-8 group-hover:-skew-y-8 group-hover:skew-x-8 shadow-orange-50 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" />
            </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;




