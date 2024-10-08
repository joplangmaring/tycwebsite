
'use client';

import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import story from '../../../public/Story.png';
import tyc27 from '../../../public/TYC_27th Show_Post.png';
import man from '../../../public/C&C Post.png';
import grind from '../../../public/Grind 10th.png';
import Link from 'next/link';
import event from '../../../public/eventbg.png';
import { HiArrowRightCircle } from "react-icons/hi2";
import { Raleway } from 'next/font/google';


const raleway = Raleway({ subsets: ['latin'] });

const Event = () => {
  const headingControls = useAnimation();
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (headingInView) {
      headingControls.start('visible');
    } else {
      headingControls.start('hidden');
    }
  }, [headingControls, headingInView]);

  const headingVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="relative w-full h-[70vh] md:h-screen">
        <Image
          src={event}
          alt="Event Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className=""
        />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/100 via-black/70 to-black/100 pt-[50px] md:pt-[70px] ">
        <div className="border border-[#000000D9] md:mb-11">
          <motion.h1
            ref={headingRef}
            initial="hidden"
            animate={headingControls}
            variants={headingVariant}
            className="text-start md:text-center ml-9 md:ml-0 text-[48px] md:text-[64px] font-playfair md:text-5xl font-black mt-6 md:mt-11 text-white"
          >
            Events
          </motion.h1>
        </div>

        {/* Grid Layout with Responsive Item Sizes */}
        <div className="grid grid-cols-2 md:gap-4 p-2 sm:p-4 md:p-0 lg:grid-cols-4 mx-4 md:mx-20">
          <div className="flex flex-col items-center">
            <span className="mb-2 text-white text-sm md:text-base font-playfair hidden md:block">WEDNESDAY</span>
            <div className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <Image
                src={grind}
                alt="Grind event"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="mb-2 text-white text-sm md:text-base font-playfair hidden md:block">TUESDAY</span>
            <div className="relative w-[150px] h-[150px] mb-4  md:w-[300px] md:h-[300px]">
              <Image
                src={man}
                alt="Man event"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="mb-2 text-white text-sm md:text-base font-playfair hidden md:block">FRIDAY</span>
            <div className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <Image
                src={tyc27}
                alt="TYC 27th event"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="mb-2 text-white text-sm md:text-base font-playfair hidden md:block">SATURDAY</span>
            <div className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <Image
                src={story}
                alt="Story event"
                layout="fill"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Reserve Now Button */}
        <div className="flex justify-center mt-8 md:mt-10">
        <button className={`bg-black ${raleway.className} text-lg md:text-[20px] text-white text-center flex items-center gap-2 px-4 md:px-6 py-2 md:py-3`}>
            <Link href="https://onlybees.in/tyc/restaurant/" className="flex items-center gap-2 ">
              Reserve Now
              <HiArrowRightCircle className='text-xl md:text-2xl' />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Event;
