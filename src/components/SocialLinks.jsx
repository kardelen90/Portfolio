import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs';


const SocialLinks = () => {


    
  return (
    
    <div className="hidden lg:flex  flex-col top-[35%] left-0 fixed ">
  <ul>
    <li 
  class="group w-12 hover:w-44 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-sky-700 before:hover:bg-sky-600 before:rotate-45"
>
  <a href="www.linkedin.com/in/kardelen-kaya-195421296
  "><FaLinkedin size={30}/>
  <span
    class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
    >Linkedin</span> </a>
 
  </li>

  <li 
  class="group w-12 hover:w-44 h-12 hover:bg-gray-900 relative bg-gray-800 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-gray-800 before:hover:bg-gray-900 before:rotate-45"
>
  <a><FaGithub size={30}/></a>
  <span
    class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
    >Github</span>
 
  </li>

  <li 
  class="group w-12 hover:w-44 h-12 hover:bg-red-600 relative bg-red-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-red-700 before:hover:bg-red-600 before:rotate-45"
>
  <a><HiOutlineMail size={30}/></a>
  <span
    class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
    >Mail</span>
 
  </li>

  <li 
  class="group w-12 hover:w-44 h-12 hover:bg-green-600 relative bg-green-700 rounded text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start gap-2 items-center p-2 pr-6 before:absolute before:-z-10 before:left-8 before:hover:left-40 before:w-6 before:h-6 before:bg-green-700 before:hover:bg-green-600 before:rotate-45"
>
  <a><BsFillPersonLinesFill size={30}/></a>
  <span
    class="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all"
    >Resume</span>
 
  </li>
 </ul>
</div>
  );
};

export default SocialLinks;