'use client';

import React, { useEffect } from 'react';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import about from '../../../public/about.png';

const About = () => {
  const headingControls = useAnimation();
  const textControls = useAnimation();
  
  // Intersection observers for heading and text
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.2, triggerOnce: true });

  useEffect(() => {
    if (headingInView) {
      headingControls.start('visible');
    }
  }, [headingControls, headingInView]);

  useEffect(() => {
    if (textInView) {
      textControls.start('visible');
    }
  }, [textControls, textInView]);

  const animationVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative w-full h-[90vh] bg-black flex justify-end">
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-center text-start text-white bg-black/80 md:items-center md:justify-center md:text-center">
        <motion.div
          ref={headingRef}
          initial="hidden"
          animate={headingControls}
          variants={animationVariant}
          className="mb-6 md:mb-8 ml-[12%] md:ml-0"
        >
          <h1 className="text-[48px] md:text-[64px] font-black font-playfair text-start md:text-center text-white">
            About
          </h1>
        </motion.div>
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={animationVariant}
          className="mx-12 md:mx-[20%] text-start md:text-center"
        >
          <p className="text-[16px] md:text-[20px] font-raleway leading-[35px]">
            Welcome to The Yeastern Civilization, Meghalaya's first brewery, where we craft exceptional beers inspired by the region's rich culture and natural beauty. Our passion for quality and innovation drives us to create unique brews that reflect our vibrant heritage.
          </p>
        </motion.div>
        <motion.div
          ref={textRef}
          initial="hidden"
          animate={textControls}
          variants={animationVariant}
          className="mt-6 md:mt-4 mx-12 md:mx-[23%] text-start md:text-center "
        >
          <p className="text-[16px] md:text-[20px] font-raleway leading-[35px]">
            Located in the heart of Meghalaya, we blend traditional brewing techniques with modern expertise, using the finest local ingredients to honor our land and its people. Every bottle is a tribute to our dedication to excellence and creativity.
          </p>
        </motion.div>
      </div>

      {/* Background Image */}
      <Image src={about} alt="About Background" className="h-full w-[550px]" />
    </div>
  );
};

export default About;