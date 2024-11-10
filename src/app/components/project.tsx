import React from "react";
import Image from "next/image";

const Project =()=>{
    return(
        <div id="project">
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
    <h1 className="title-font sm:text-8xl mb-4 font-medium text-black">
        My Projects</h1>
        <div className='h-1 w-full bg-gray-200 rounded-xl'></div>  
        <br className="hidden lg:inline-block text-xl" />  
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus voluptatibus a consectetur aperiam 
       numquam ut aliquid ab? Id ullam eligendi dicta commodi nostrum cupiditate cumque facilis, omnis repudiandae
        voluptatibus aspernatur.
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/project/backgroundpic.png")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Website create
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              saloon website
            </h1>
            <p className="leading-relaxed">
              This website is design for bussines purpose 
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/pic/atm 1.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
            ATM Machine 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              CLI project
            </h1>
            <p className="leading-relaxed">
              This project is design for ATM transation.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/pic/resume.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE Resume builder
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              This the resumer builder
            </h1>
            <p className="leading-relaxed">
           This is the resume builder project to create online resume 
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/pic/calculator.jpeg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              THE calculator
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              cli project
            </h1>
            <p className="leading-relaxed">
            This project is design for digital calculator.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/pic/todo list.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              To Do List
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              TO DO LIST PROJECT
            </h1>
            <p className="leading-relaxed">
              This is to do list cli project
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={require("../../../public/assests/pic/word.jpg")}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
              Word Count 
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              word count cli project
            </h1>
            <p className="leading-relaxed">
              This is the cli word count project 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


        </div>

    )
}
export default Project;