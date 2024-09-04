// import React from 'react';
// import Homeimg from '@/app/components/homeimg';
// import About from '@/app/components/about';
// import Vision from '@/app/components/vision';
// import Event from '@/app/components/event';
// import Interior from '@/app/components/interior';
// import Gallery from '@/app/components/gallery';
// import Intouch from '@/app/components/intouch';
// import Footer from '@/app/components/footer';
// import Navbar from '@/app/components/navbar';
// // import image from '@/barcomponents/image';

// const page = () => {
//   return (
//     <div className=''>
//            <Navbar/>
//            <Homeimg/>
//            <About/>
//            <Vision/>
//            <Event/>
//            <Interior/>
//            <Gallery/>
//            <Intouch/>
//            <Footer/>
//     </div>
//   )
// }

// export default page

// src/app/page.js

'use client';
import React, { useRef } from 'react';
import Homeimg from '@/app/components/homeimg';
import About from '@/app/components/about';
import Vision from '@/app/components/vision';
import Event from '@/app/components/event';
import Interior from '@/app/components/interior';
import Gallery from '@/app/components/gallery';
import Intouch from '@/app/components/intouch';
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';

const Page = () => {
  const homeRef = useRef(null); 
  const aboutRef = useRef(null);
  const visionRef = useRef(null);
  const eventsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className='bg-black'>
      <Navbar
        homeRef={homeRef}  
        aboutRef={aboutRef}
        visionRef={visionRef}
        eventsRef={eventsRef}
        contactRef={contactRef}
      />
      <div ref={homeRef}><Homeimg /></div> 
      <div ref={aboutRef}><About /></div>
      <div ref={visionRef}><Vision /></div>
      <div ref={eventsRef}><Event /></div>
      <Interior />
      <Gallery />
      <div ref={contactRef}><Intouch /></div>
      <Footer />
    </div>
  );
};

export default Page;
















