import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { BsBank } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";

const Skills =()=>{
    return(
        <div id="skill">

<div className= "container mx-auto flex px-5 py-24 items-center justify-center flex-col ">

      <h1 className="title-font sm:text-8xl mb-4 font-medium text-black">
        My Skills  
        <div className='h-1 w-full bg-gray-200 rounded-xl'></div>        
       </h1>
       </div>

<section className="text-gray-600 body-font">


  <div className="container px-5 py-24 mx-auto">
  
  {/* 1st div */}
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full
      bg-gradient-to-r from-blue-950 from-10% via-green-950 via-30% to-orange-300 to-90% 
       text-white flex-shrink-0">
        <FaLaptopCode  className ="text-7xl ml-4"/>
      </div>

      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h1 className="text-black text-4xl title-font font-medium mb-2">
        Technical Skills:
        </h1>
        <p className="leading-relaxed text-2xl">
        HTML, CSS, JavaScript, TypeScript , Next.js, Talwind CSS, 
        foundational skills for Web development.Emerging Technologies: GenAI, Web3, Metaverse
        </p>

        <a className="mt-3 text-blue-900 text-3xl inline-flex items-center">
          Learn More...
        </a>
      
      </div>
    </div>


{/* 2nd div */}
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h1 className="text-black text-4xl title-font font-medium mb-2">
        Software Proficiency:
        </h1>
        <p className="leading-relaxed text-2xl">          
        Microsoft Office: Word, Excel, PowerPoint.
        Graphic Design Tools: Canva,  Adobe Photoshop,Video Editing 
        </p>
        <a className="mt-3 text-blue-900 text-3xl inline-flex items-center">
          Learn More...
        </a>

      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center 
      justify-center rounded-full bg-gradient-to-r from-blue-950 from-10% via-green-950 via-30% to-orange-300 to-90% 
       text-white flex-shrink-0">
        <GrCloudSoftware className ="text-7xl ml-4" />
      </div>
    </div>

{/* 3rd div */}
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full
      bg-gradient-to-r from-blue-950 from-10% via-green-950 via-30% to-orange-300 to-90% 
       text-white flex-shrink-0">
        <BsBank  className ="text-7xl ml-4"/>
      </div>

      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h1 className="text-black text-4xl title-font font-medium mb-2">
        Banking & Financial Skills:
        </h1>
        <p className="leading-relaxed text-2xl">
        Banking Operations: General Banking,Online Banking.<br/> 
        Financial & non-Finacial transation:Customer Service and transaction handling.
        </p>
        <a className="mt-3 text-blue-900 text-3xl inline-flex items-center">
          Learn More...
        </a>
      
      </div>
    </div>

{/* 4th div */}
<div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h1 className="text-black text-4xl title-font font-medium mb-2">
        Educational & Teaching Skills::
        </h1>
        <p className="leading-relaxed text-2xl">          
        Teaching & Curriculum Development: Project-Based Learning, Lesson Planning, 
        Student Assessment skills for effective teaching, lesson design, and fostering learning environments.
        </p>
        <a className="mt-3 text-blue-900 text-3xl inline-flex items-center">
          Learn More...
        </a>

      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center 
      justify-center rounded-full bg-gradient-to-r from-blue-950 from-10% via-green-950 via-30% to-orange-300 to-90% 
       text-white flex-shrink-0">
        <MdCastForEducation className ="text-7xl ml-4" />
      </div>
    </div>

    <button className="flex mx-auto mt-20 text-white bg-green-900 border-0 py-2 px-6 focus:outline-none
     hover:bg-yellow-600 rounded text-lg">
      Button
    </button>
  </div>
</section>
  </div>

    )
}
export default Skills;