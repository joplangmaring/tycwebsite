// src/app/page.js

'use client';
import React, { useState, useEffect, useRef } from 'react';
import Homeimg from '@/app/components/homeimg';
import About from '@/app/components/about';
import Vision from '@/app/components/vision';
import Event from '@/app/components/event';
import Interior from '@/app/components/interior';
import Gallery from '@/app/components/gallery';
import Intouch from '@/app/components/intouch';
import Footer from '@/app/components/footer';
import Navbar from '@/app/components/navbar';
import Loader from '@/app/components/Loader'; // Import the Loader component

const Page = () => {
  const [isLoading, setIsLoading] = useState(true); // State to control loading

  const homeRef = useRef(null); 
  const aboutRef = useRef(null);
  const visionRef = useRef(null);
  const eventsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const loadAssets = async () => {
      // Simulate a loading process (replace with actual logic if needed)
      await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulated delay
      setIsLoading(false);
    };

    loadAssets();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
          <Interior />
          <div ref={eventsRef}><Event /></div>
          <Gallery />
          <div ref={contactRef}><Intouch /></div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Page;
