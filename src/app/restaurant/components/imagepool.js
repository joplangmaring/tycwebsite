'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import table from '../../../../public/barpool.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../../../style/datepicker.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import { useRouter } from 'next/navigation';

const ImageComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const router = useRouter(); 


  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  // Intersection observer hooks
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.2 });
  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.2 });
  const { ref: priceNoteRef, inView: priceNoteInView } = useInView({ threshold: 0.2 });
  const { ref: tableRef, inView: tableInView } = useInView({ threshold: 0.2 });
  const { ref: dateRef, inView: dateInView } = useInView({ threshold: 0.2 });
  const { ref: dividerRef, inView: dividerInView } = useInView({ threshold: 0.2 });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.2 });

  const handlenavigate = () => {
    router.push('/bar');
 }

  return (
    <div className='flex items-center flex-col px-4'>
      <div className='w-full max-w-5xl mt-[140px]'>
        {/* Sections Header */}
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={variants}
          className='mb-10'
        >
          <span className="relative inline-block">
            <button className="relative z-10 text-base sm:text-lg md:text-xl font-medium" onClick={handlenavigate}>BAR SECTION</button>
          </span>
          <button className="ml-4 text-base sm:text-lg md:text-xl font-medium underline cursor-not-allowed">RESTAURANT SECTION</button>
        </motion.div>

        {/* Image */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageInView ? 'visible' : 'hidden'}
          variants={variants}
        >
          <Image
            src={table}
            alt="Table image"
            width={1700}
            height={1200}
            className='mt-4 w-full h-auto max-w-[100%] max-h-[1000px] sm:max-h-[600px] md:max-h-[900px]'
          />
        </motion.div>

        {/* Price and Note */}
        <motion.div
          ref={priceNoteRef}
          initial="hidden"
          animate={priceNoteInView ? 'visible' : 'hidden'}
          variants={variants}
          className='mt-8 md:mt-11 mx-4 md:ml-[90px]'
        >
          <h1 className='font-black text-2xl md:text-4xl'>INR 2000</h1>
          <p className='font-bold text-sm md:text-base tracking-wide mt-2 md:mt-4'>
            Note: A deduction of INR 2000 will be applied to the final bill.
          </p>
        </motion.div>

        {/* Select Table */}
        <motion.div
          ref={tableRef}
          initial="hidden"
          animate={tableInView ? 'visible' : 'hidden'}
          variants={variants}
          className='flex flex-col mt-8 mx-4 md:ml-[90px] md:mt-[40px]'
        >
          <span className='font-bold text-lg md:text-base'>Select Table</span>
          <select className="bg-gray-300 rounded-full p-4 mt-1 w-[50%] outline-none">
            <option value="">Table 1</option>
            <option value="">Table 2</option>
            <option value="">Table 3</option>
          </select>
        </motion.div>

        {/* Select Date */}
        <motion.div
          ref={dateRef}
          initial="hidden"
          animate={dateInView ? 'visible' : 'hidden'}
          variants={variants}
          className='flex flex-col mt-8 mx-4 md:mx-0 md:ml-[90px] md:mt-[40px]'
        >
          <span className='font-bold text-sm md:text-base'>Select Date</span>
          <div className='flex flex-col md:flex-row mt-4 md:mt-10'>
            <div className='bg-gray-300 h-[50px] flex items-center w-full md:w-[190px] rounded-full justify-center'>
              <span className='text-xs md:text-sm'>Month</span>
            </div>
            <div className="flex flex-col items-center justify-center mt-4 md:mt-0 md:ml-[190px] w-full md:w-auto">
              <div className="shadow-lg w-full md:w-[300px]">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  inline
                  className="react-datepicker__calendar"
                  calendarClassName="react-datepicker__calendar"
                  wrapperClassName="w-full"
                  style={{ fontSize: '0.75rem' }} // Adjust calendar font size for smaller screens
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <motion.div
          ref={dividerRef}
          initial="hidden"
          animate={dividerInView ? 'visible' : 'hidden'}
          variants={variants}
          className="mt-11"
        >
          <div className="border-t border-black border-[1px]"></div>
        </motion.div>

        {/* Form and Terms */}
        <motion.div
          ref={formRef}
          initial="hidden"
          animate={formInView ? 'visible' : 'hidden'}
          variants={variants}
          className='flex flex-col md:flex-row justify-between mt-11 px-4'
        >
          {/* Form Fields */}
          <form className='flex flex-col w-full md:w-[500px] mb-6 md:mb-0'>
            <div className='mb-4'>
              <label htmlFor="email" className='block text-sm font-medium'>Email</label>
              <input
                type="text"
                id="email"
                className="bg-gray-300 rounded-full p-3 w-full outline-none text-sm"
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="phone" className='block text-sm font-medium'>Phone number</label>
              <input
                type="text"
                id="phone"
                className="bg-gray-300 rounded-full p-3 w-full outline-none text-sm"
              />
            </div>
            <div className='mb-4'>
              <label htmlFor="name" className='block text-sm font-medium'>Full Name</label>
              <input
                type="text"
                id="name"
                className="bg-gray-300 rounded-full p-3 w-full outline-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white p-3 rounded-full mt-4 w-full md:w-auto"
            >
              Reserve Now
            </button>
          </form>

          {/* Terms and Conditions */}
          <div className='flex flex-col md:flex-wrap w-full md:w-[400px] mt-4 md:mt-0'>
            <span className="text-sm font-bold text-center md:text-left">
              By purchasing, you’ll receive an account and agree
              to our general <strong className="text-green-500">Terms of Use, Privacy Policy,
                and the Ticket Purchase Terms.</strong> We process your personal
              data in accordance with our <strong className="text-green-500">Privacy Policy.</strong>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default ImageComponent;
