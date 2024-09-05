"use client";

import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import vision from '../../../public/vision.png';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] }); // Import and configure Raleway font

const Vision = () => {
  const headingControls = useAnimation();
  const textControls = useAnimation();
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2 });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (headingInView) {
      headingControls.start('visible');
    } else {
      headingControls.start('hidden');
    }
  }, [headingControls, headingInView]);

  useEffect(() => {
    if (textInView) {
      textControls.start('visible');
    } else {
      textControls.start('hidden');
    }
  }, [textControls, textInView]);

  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const headingVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <Image 
        src={vision} 
        alt="Vision Background" 
        layout="fill" 
        objectFit="cover" 
        quality={100}
        className="z-0"
      />

      {/* Overlay content */}
      <div className='absolute inset-0 bg-[#000000BF] flex flex-col justify-center items-start md:items-center'>
        <div className='pt-[120px] text-start md:text-center px-4  ml-[6%] md:ml-0'>
          <motion.span
            ref={headingRef}
            initial="hidden"
            animate={headingControls}
            variants={headingVariant}
            className='font-black text-[48px] md:text-[64px] text-white font-playfair'
          >
            Our Vision
          </motion.span>
        </div>
        <div className='mx-4 md:mx-[15%] p-6 md:p-11 mb-20 text-start md:text-center'>
          <motion.span
            ref={textRef}
            initial="hidden"
            animate={textControls}
            variants={textVariant}
            className={`text-[16px] md:text-[20px] text-white leading-[40px] ${raleway.className}`} // Apply Raleway font
          >
            Our vision at The Yeastern Civilization is to establish ourselves as Meghalaya's
            foremost brewery, renowned for our dedication to crafting world-class beers
            that celebrate the region's diverse flavors and traditions. We aim to lead in
            sustainability, foster community engagement, support local artisans, and continuously
            innovate in brewing techniques. By honoring Meghalaya's rich cultural heritage, we aspire
            to create a lasting legacy that unites people through the joy of exceptional beer.
          </motion.span>
        </div>
      </div>
    </div>
  );
}

export default Vision;
