import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='mb-[60px] mt-20 sm:mt-0'>
      <div className='flex justify-center mt-11 gap-3 '>
        <Link href=""><FaFacebookSquare className='text-4xl text-white' /></Link>
        <Link href=""><FaInstagramSquare className='text-4xl text-white' /></Link>
        <Link href=""> <FaLinkedin className='text-4xl text-white' /></Link>
        <Link href=""><FaSquareWhatsapp className='text-4xl text-white' /></Link>
      </div>
      <div className="mt-11">
        <div className="border-t border-white border-[1px]"></div>
      </div>

      <div className='text-center mt-2'>
        <span className='text-[12px]  text-white'>Copyright © 2024 THE YEASTERN CIVILIZATION</span>
      </div>
    </div>
  )
}

export default Footer
