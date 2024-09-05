// "use client";

// import React, { useEffect } from 'react';
// import { HiArrowRightCircle } from "react-icons/hi2";
// import homeimg from '../../../public/homeimg.png';
// import smallhome from '../../../public/smallhome.png';
// import Image from 'next/image';
// import { useAnimation, motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useRouter } from 'next/navigation';
// import { Link } from 'react-scroll';


// const HomeImg = () => {
//   const { ref, inView } = useInView({ threshold: 0.2 });
//   const controls = useAnimation();
//   const router = useRouter();

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     } else {
//       controls.start('hidden');
//     }
//   }, [controls, inView]);

//   const textVariant = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: 'easeOut' }
//     }
//   };

//   const handleClick = () => {
//     router.push('https://onlybees.in/tyc/restaurant/');
//   };

//   return (
//     <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[100vh] mx-auto" id='home'>
//       {/* Desktop Image */}
//       <div className="hidden md:block relative w-full h-full">
//         <Image
//           src={homeimg}
//           alt="Home Image"
//           layout="fill"
//           className="object-cover z-0"
//         />
//       </div>
      
//       {/* Small Screen Image */}
//       <div className="md:hidden relative w-full h-full">
//         <Image
//           src={smallhome}
//           alt="Home Image"
//           layout="fill"
//           className="object-cover z-0"
//         />
//       </div>

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black h-full w-full"></div>

//       {/* Button */}
//       <motion.div
//         ref={ref}
//         initial="hidden"
//         animate={controls}
//         variants={textVariant}
//         className="absolute inset-0 flex items-center justify-center p-4 md:mt-[33%] mt-[90%]"
//       >
//         <button
//           onClick={handleClick}
//           className="flex flex-col items-center relative border-2 border-transparent py-2 px-4 rounded-lg"
//         >
//           <span className="text-white font-playfair text-xl sm:text-2xl md:text-3xl lg:text-3xl relative">
//             Reserve Now
//             <span className="absolute left-0 bottom-[-5px] w-full h-[1px] bg-white rounded-full"></span>
//           </span>
//           <HiArrowRightCircle className="text-4xl sm:text-5xl md:text-4xl lg:text-4xl text-white mt-3 sm:mt-5" />
//         </button>
//       </motion.div>
//     </div>
//   );
// }

// export default HomeImg;





"use client";

import React, { useEffect } from 'react';
import { HiArrowRightCircle } from "react-icons/hi2";
import homeimg from '../../../public/homeimg.png';
import smallhome from '../../../public/smallhome.png';
import Image from 'next/image';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRouter } from 'next/navigation';

const HomeImg = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const controls = useAnimation();
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const handleClick = () => {
    router.push('/https://onlybees.in/tyc/restaurant/');
  };

  return (
    <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[100vh] mx-auto" id='home'>
      {/* Desktop Image */}
      <div className="hidden md:block relative w-full h-full">
        <Image
          src={homeimg}
          alt="Home Image"
          layout="fill"
          className="object-cover z-0"
        />
      </div>
      
      {/* Small Screen Image */}
      <div className="md:hidden relative w-full h-full">
        <Image
          src={smallhome}
          alt="Home Image"
          layout="fill"
          className="object-cover z-0"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black h-full w-full"></div>

      {/* Button */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textVariant}
        className="absolute inset-0 flex items-center justify-center p-4 md:mt-[33%] mt-[70%]"
      >
        <button
          onClick={handleClick}
          className="flex flex-col items-center relative border-2 border-transparent py-2 px-4 md:px-6 lg:px-8 rounded-lg"
        >
          <span className="text-white font-playfair text-lg sm:text-xl md:text-2xl lg:text-3xl relative">
            Reserve Now
            <span className="absolute left-0 bottom-[-5px] w-full h-[1px] bg-white rounded-full"></span>
          </span>
          <HiArrowRightCircle className="text-3xl sm:text-4xl md:text-5xl text-white mt-2 sm:mt-4" />
        </button>
      </motion.div>
    </div>
  );
};

export default HomeImg;