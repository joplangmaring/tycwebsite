// components/Loader.js
'use client';// src/app/components/Loader.js

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from '../../../public/logo/logo_2_white.png'; // Adjust the path to your logo

const Loader = () => {
  // Define the breathing animation with scale and opacity
  const breathingAnimation = {
    // scale: [1, 1.05, 1],
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <motion.div
        animate={breathingAnimation}
        className="flex items-center justify-center"
      >
        <Image src={logo} alt="Loading" width={200} height='auto' />
      </motion.div>
    </div>
  );
};

export default Loader;
