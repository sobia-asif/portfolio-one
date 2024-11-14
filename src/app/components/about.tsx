import React from "react";
import Image from "next/image";

const About =()=>{
    return(
        <div id="about"> 
            <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require("../../../public/assests/pic/about.png")}
      />
    </div>

    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"> 
  
      <h1 className="title-font sm:text-8xl mb-4 font-medium font-serif text-black">
        About Me</h1>
        <div className='h-1 w-full bg-gray-200 rounded-xl'></div>  
        <br className="hidden lg:inline-block text-xl" />

       <p className="leading-relaxed text-blue-950 text-4xl font-semibold">
       Currently Enhancing Skills in GenAI, Web3 and Metaverse.
       </p>

       <p className="leading-relaxed text-2xl">
      I am an experienced Banker and IT professional with a strong background in Teaching Banking and Digital skills. 
      I hold a Master degree in Economics & Finance from Karachi University and a Bachelor of Commerce from 
      the Government College of Commerce & Economics. Passionate about education and technology, I have excelled in various roles
      including teaching English Social Studies and Economics at NASRA School and managing banking operations at Habib Metro Bank
       Standard Chartered  & KASB Bank where I earned recognition as Officer of the Month.<br/>
      Skilled in HTML  CSS  JavaScript and TypeScript Next.js & Talwind CSS as well as Microsoft Office and Graphic design
      I am  currently expanding my  expertise in GenAI Web3 and the Metaverse through the Governor Sindh Initiative.
      My goal is to inspire others through my dedication to continuous learning and innovation in Education and Technology.<br/>
      </p>
     
    </div>
  </div>
</section>
 </div>

    )
}
export default About;

