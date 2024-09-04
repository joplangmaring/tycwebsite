"use client";

import React from 'react';
import Image from 'next/image';
import Intouch from '../../../public/touch1.png';
import Intouch1 from '../../../public/touchbg.png';

const IntouchImage = () => {
  return (
    <div className='pt-1'>
      <div className='text-center mb-6 sm:mb-11'>
        <h1 className='font-black text-3xl sm:text-5xl pt-[60px] sm:pt-[90px] text-white font-playfair' id='contact'>LET'S GET IN TOUCH</h1>
        <p className='text-xs sm:text-sm font-bold text-white font-raleway'>Or just reach out manually to hello@tycindia.com</p>
      </div>

      <div className='flex flex-col lg:flex-row'>
        <div className='relative w-full lg:w-[70%] h-[300px] sm:h-auto'>
          <Image src={Intouch} alt="Intouch" layout="fill" objectFit="cover" />
        </div>

        <div className='relative w-full h-[400px] sm:h-auto'>
          <Image src={Intouch1} alt="Intouch Background" className='absolute inset-0 w-full h-full object-cover' />

          <div className='relative bg-black bg-opacity-60 w-full h-full flex items-center justify-center'>
            <form className='flex flex-col gap-4 p-4 sm:p-8 bg-black bg-opacity-60 text-white w-full max-w-4xl'>
              <div className='w-full p-3'>
                <div className='flex flex-col sm:flex-row gap-4 w-full'>
                  <div className='mb-4 w-full'>
                    <label htmlFor="firstname" className='block mb-1 font-playfair'>FIRST NAME</label>
                    <input
                      type="text"
                      id="firstname"
                      className='bg-transparent text-white border-b border-white w-full outline-none'
                    />
                  </div>
                  <div className='mb-4 w-full'>
                    <label htmlFor="lastname" className='block mb-1 font-playfair'>LAST NAME</label>
                    <input
                      type="text"
                      id="lastname"
                      className='bg-transparent text-white border-b border-white w-full outline-none'
                    />
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 w-full'>
                  <div className='mb-4 w-full sm:w-[49%]'>
                    <label htmlFor="email" className='block mb-1 font-playfair'>EMAIL</label>
                    <input
                      type="email"
                      id="email"
                      className='bg-transparent text-white border-b border-white w-full outline-none'
                    />
                  </div>
                </div>


                <div className='flex flex-col sm:flex-row w-full mt-10 sm:mt-20'>
                  <div className='mb-4 w-full'>
                    <label htmlFor="message" className='block mb-1 font-playfair'>MESSAGE</label>
                    <textarea
                      id="message"
                      className='bg-transparent border-b border-white text-white p-2 w-full h-[100px] resize-none outline-none'
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className='bg-white text-black font-playfair p-2  px-20 text-[24px]'
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntouchImage;
