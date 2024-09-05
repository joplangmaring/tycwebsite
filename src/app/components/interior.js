"use client";

import React from 'react';
import Image from 'next/image';
import interior_1 from '../../../public/interior_1.png';
import interior_2 from '../../../public/interior_2.png';
import interior_3 from '../../../public/interior_3.png';
import interior_4 from '../../../public/interior_4.png';
import interiorsmall from '../../../public/interirorsmall.png';

const Interior = () => {
  return (
    <div className='relative'>
      {/* Gradient Overlay */}
      <div className='absolute inset-0 bg-custom-gradient z-10 pointer-events-none'></div>
      
      {/* Heading Centered on Top */}
      <div className='absolute inset-0 flex items-center justify-center z-20'>
        <h1 className='text-center text-white text-5xl font-black font-playfair'>INTERIORS</h1>
      </div>

      {/* Large images (shown on medium and larger screens) */}
      <div className='hidden md:flex flex-col md:flex-row'>
        {/* Ensure full width and height on large screens */}
        <div className='w-full md:w-full h-[600px] relative'>
          <Image src={interior_1} alt="Interior 1" className='object-cover w-full h-full' />
        </div>
        <div className='w-full md:w-full h-[600px] relative'>
          <Image src={interior_2} alt="Interior 2" className='object-cover w-full h-full' />
        </div>
        <div className='w-full md:w-full h-[600px] relative'>
          <Image src={interior_3} alt="Interior 3" className='object-cover w-full h-full' />
        </div>
        <div className='w-full md:w-full h-[600px] relative'>
          <Image src={interior_4} alt="Interior 4" className='object-cover w-full h-full' />
        </div>
      </div>

      {/* Small image (shown on small screens) */}
      <div className='md:hidden'>
        <Image src={interiorsmall} alt="Interior Small" className='w-full h-auto' />
      </div>
    </div>
  );
}

export default Interior;
