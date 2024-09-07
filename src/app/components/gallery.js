// "use client";

// import React, { useEffect } from 'react';
// import { useAnimation, motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import Image from 'next/image';
// import Gallery1 from '../../../public/gallery.jpg';
// import Gallery2 from '../../../public/galler2.jpg';
// import Gallery3 from '../../../public/gallery3.jpg';
// import Gallery4 from '../../../public/gallery4.jpg';
// import Gallery5 from '../../../public/gallery5.jpg';
// import Gallery6 from '../../../public/gallery6.jpg';

// const GalleryComponent = () => {
//   const controls = useAnimation();
//   const headingControls = useAnimation();
//   const { ref: galleryRef, inView: galleryInView } = useInView({ threshold: 0.2 });
//   const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.2 });

//   useEffect(() => {
//     if (galleryInView) {
//       controls.start('visible');
//     } else {
//       controls.start('hidden');
//     }
//   }, [controls, galleryInView]);

//   useEffect(() => {
//     if (headingInView) {
//       headingControls.start('visible');
//     } else {
//       headingControls.start('hidden');
//     }
//   }, [headingControls, headingInView]);

//   const imageVariant = {
//     hidden: { opacity: 1, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: 'easeOut' }
//     }
//   };

//   const headingVariant = {
//     hidden: { opacity: 0, y: -30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.8, ease: 'easeOut' }
//     }
//   };

//   return (
//     <div className='bg-gray-300 mt-16 px-4'>
//       <div className='border border-gray-300'>
//         <motion.h1
//           ref={headingRef}
//           initial="hidden"
//           animate={headingControls}
//           variants={headingVariant}
//           className='text-center font-black text-5xl mt-14 mb-14'
//         >
//           GALLERY
//         </motion.h1>
//       </div>
//       <motion.div
//         ref={galleryRef}
//         initial="hidden"
//         animate={controls}
//         variants={imageVariant}
//         className='columns-4 gap-2 mx-auto'
//       >
//         <motion.div variants={imageVariant} className='break-before-avoid pb-11'>
//           <Image src={Gallery1} alt="Gallery Image 1" className='mb-2' />
//           <Image src={Gallery2} alt="Gallery Image 2" className='mb-2' />
//           <Image src={Gallery3} alt="Gallery Image 3" className='mb-2' />
//           <Image src={Gallery4} alt="Gallery Image 4" className='mb-2' />
//           <Image src={Gallery6} alt="Gallery Image 6" className='mb-2' />
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// export default GalleryComponent;


import React from 'react';
import Image from 'next/image';
import interior from '../../../public/interior.png';
import smallgallery from '../../../public/smallgallery.png';

const Gallery = () => {
  return (
    <div>
      {/* <h1 className='font-playfair text-5xl mb-10 font-black text-white mt-[90px] hidden'>
        Gallery
      </h1> */}


      {/* Large Image (Interior) - shown on medium and larger screens */}
      <div className='hidden md:flex justify-center'>
        <Image
          src={interior}
          alt="Interior"
          width={1300} // Adjust width as needed
          height={600} // Adjust height as needed
          className='object-cover'
        />
      </div>

      {/* Small Image (smallgallery) - shown on small screens */}
      <div className='md:hidden flex  justify-center  flex-col mx-9'>
        <div>
          {/* <h1 className='font-playfair text-5xl mb-10 font-black text-white mt-[90px]'>
            Gallery
          </h1> */}
        </div>
        <Image
          src={smallgallery}
          alt="Small Gallery"
          className='object-cover'
        />
      </div>
    </div>
  );
}

export default Gallery;
