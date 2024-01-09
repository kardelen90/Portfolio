import React from "react";
import proje1 from "../assets/portfolio/proje1.png";
import proje2 from "../assets/portfolio/proje2.png";
import proje3 from "../assets/portfolio/proje3.png";
import proje4 from "../assets/portfolio/proje4.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: proje1,
      codeHref: "https://github.com/kardelen90/LMS-PROJECT.git"
    },
    {
      id: 2,
      src: proje2,
      codeHref: "https://github.com/kardelen90/LMS-PROJECT.git"
    },
    {
      id: 3,
      src: proje3,
      codeHref: "https://github.com/kardelen90/LMS-PROJECT.git"
    },
    {
      id: 4,
      src: proje4,
      codeHref: "https://github.com/kardelen90/LMS-PROJECT.git"
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({id, src, codeHref }) => (
            <div key={id} className=" relative flex w-80 flex-col rounded-xl shadow-md hover:shadow-lg hover:shadow-gray-700 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <img
                src={src}
                alt=""
                className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-lg shadow-blue-gray-500/40 "
              />
              <div className="flex items-center justify-center m-5">
                <a href={codeHref} className="select-none rounded-lg bg-gray-900 py-2 px-2 text-center align-middle font-bold text-xs  uppercase text-gray-400 shadow-md shadow-gray-700 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

