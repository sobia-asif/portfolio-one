"use client"

import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from "next/link";



const Hero=()=> {
    return(
      <div className="bg-gradient-to-r from-blue-950 from-10% via-green-950 via-30% to-orange-300 to-90% ...">
            <section className="text-black body-font bg-fixed bg-cover bg-center custom-image">

  <div className="container mx-auto flex px-5 py-2 items-center justify-center flex-col">
    <Image
      className="lg:w-2/4 md:w-3/6 w-5/6 mb-10 object-cover object-center roundedik"
      alt="profile pic"
      width={700}
      height={700}
            src= {require("../../../public/assests/pic/ppp1.jpeg.png")}
    />
    <div className="  text-center lg:w-2/3 w-full">
    <h1 className=" animate-pulse mb-8 leading-relaxed title-font sm:text-4xl text-3xl font-medium text-white "> 
      Your Brand Deserve a Website that Speaks to the World.</h1>
    <p className="mb-8 leading-relaxed title-font sm:text-4xl text-3xl font-medium text-white ">
        It&apos;s Sobia 
      </p>
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
      <Typewriter
  options={{
    strings: [' I am a Web Developer', 
            'UI/UX Designer',
            'Video Editor'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="ml-4 inline-flex text-white bg-gradient-to-r from-blue-950 from-10% via-green-950 via-30% to-orange-300 to-90%
         border-2 py-2 px-6 focus:outline-none 
        hover:bg-yellow-600 rounded text-lg">
          Contact
        </button>
        </Link>
        <button className="ml-4 inline-flex text-white bg-gradient-to-r from-blue-950 from-10% via-green-950 via-30% to-orange-300 to-90%
         border-2 py-2 px-6 focus:outline-none 
        hover:bg-yellow-600 rounded text-lg">
          Hire Me
        </button>
        
      </div>
    </div>
  </div>
</section>



        </div>
    )
}
export default Hero    