import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCloudDownloadAlt } from "react-icons/fa";

// container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
// container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col


const Navbar=()=> {
    return(
        <div  className="bg-gradient-to-r from-blue-950 from-10% via-green-950 via-30% to-orange-300 to-90%... z-50 sticky top-0">  
        <header className="text-white font-bold body-font text-5xl  ">
  <div className=" container mx-auto flex flex-wrap p-1 py-0 flex-col md:flex-row items-center">
    <a className="flex title-font font-semibold items-center text-black mb-4 md:mb-0">
     <Image src={require("../../../public/assests/pic/logo.jpeg")} alt="MF Web"  width={100} height={100} 
     className="py-8 w-15 rounded-full"
     />
      <span className="ml-4 text-yellow-600 8xl font-serif">S</span>
      <span className= " text-white 5xl font-serif">obia Sadiq</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href = {"/"} className="mr-5 text-3xl font-serif hover:text-yellow-600 ">Home</Link >
      <Link href ={"#about"} className="mr-5 text-3xl font-serif hover:text-yellow-600">About</Link >
      <Link href ={"#skill"} className="mr-5 text-3xl font-serif hover:text-yellow-600">Skills</Link>
      <Link href ={"#project"} className="mr-5 text-3xl font-serif hover:text-yellow-600">Projects</Link >
      <Link href ={"#contact"} className="mr-5 text-3xl font-serif hover:text-yellow-600">Contact</Link >
    </nav>
    <button className="inline-flex items-center bg-gradient-to-r from-blue-950 from-10% via-green-950 via-30% to-orange-300 to-90%... 
    border-0 py-4 px-4 focus:outline-none hover:bg-yellow-600 rounded text-base mt-4 md:mt-0">
    
    <a href = "/assests/resume/sobiaresume.pdf"/>
    Download CV
    <FaCloudDownloadAlt className ="text-2xl ml-4 hover:text-blue-900"/>
 
    </button>
    <a/>
  </div>
</header>
        </div>
    )
}

export default Navbar