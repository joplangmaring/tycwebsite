import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
  return (
    <div className=' mt-40 sm:mt-0'>
      <div className='flex justify-center mt-11 gap-3 '>
        <Link href="https://www.facebook.com/p/The-Yeastern-Civilization-61554142565935/" target='_blank' rel='norefferer noopener'><FaFacebookSquare className='text-4xl text-white' /></Link>
        <Link href="https://www.instagram.com/tycshillong/" target='_blank' rel='norefferer noopener'><FaInstagramSquare className='text-4xl text-white' /></Link>
        <Link href="https://www.instagram.com/reel/C4GAauata8r/" target='_blank' rel='norefferer noopener'> <FaLinkedin className='text-4xl text-white' /></Link>
        <Link href="https://api.whatsapp.com/send/?phone=916909378111&text=Reservation&type=phone_number&app_absent=0" target='_blank' rel='norefferer noopener'><FaSquareWhatsapp className='text-4xl text-white' /></Link>
      </div>
      <div className="mt-2">
        <div className="border-t border-white border-[1px]"></div>
      </div>

      <div className='text-center mt-2'>
        <span className='text-[12px]  font-inter text-white'>Copyright © 2024 THE YEASTERN CIVILIZATION</span>
      </div>
    </div>
  )
}

export default Footer
