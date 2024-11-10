import react from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import Link from "next/link"
import Image from 'next/image';


const Footer = ()=> {
    return(
        <div className="bg-white">
        <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

        <Image src={require("../../../public/assests/pic/logo.jpeg")} alt="MF Web"  width={100} height={100}
        className="w-15"
        />
        <span className="ml-3 text-xl">MF Web Studio</span>
        </a>
       
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 MF Web Studio —
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">

      <Link 
        target="blank"
        href= {"https://www.youtube.com/@MFwebstudio"}
        className="text-blue-800"
      >
        <CiYoutube className ="text-3xl hover:text-[#ff0000]"/>
        </Link>

      <Link 
        target="blank"
        href= {"https://www.facebook.com/asif.farzam.75 "}
        className="text-blue-800"
      >
        <CiFacebook  className ="text-3xl hover:text-[#ff0000]"/>
        </Link>  
    </span>
  </div>
</footer>

</div>
    
    );
};
export default Footer; 