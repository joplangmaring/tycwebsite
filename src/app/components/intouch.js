"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Intouch from '../../../public/touch1.png';
import Intouch1 from '../../../public/touchbg.png';
import axios from 'axios';

const IntouchImage = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('/api/sendEmail', formData);
      setSuccess('Email sent successfully!');
    } catch (error) {
      setError(error.response?.data?.error || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='pt-1'>
      <div className='text-center mb-[60px] sm:mb-11 mx-16'>
        <h1 className='font-black text-[48px] sm:text-[48px] pt-[60px] sm:pt-[90px] text-white font-playfair leading-[50px]' id='contact'>LET'S GET IN TOUCH</h1>
        <p className='text-xs sm:text-sm font-bold text-white font-raleway'>Or just reach out manually to hello@tycindia.com</p>
      </div>

      <div className='flex flex-col lg:flex-row'>
        {/* Hide this image on small screens, show only on medium and larger screens */}
        <div className='relative w-full lg:w-[70%] h-[300px] sm:h-auto hidden md:block'>
          <Image src={Intouch} alt="Intouch" layout="fill" objectFit="cover" />
        </div>

        <div className='relative w-full h-[400px] sm:h-auto'>
          <Image src={Intouch1} alt="Intouch Background" className='absolute inset-0 w-full h-full object-cover' />

          <div className='relative bg-black bg-opacity-60 w-full  flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 p-4 sm:p-8 bg-black bg-opacity-60 text-white w-full max-w-4xl'>
              <div className='w-full p-3'>
                <div className='flex flex-col sm:flex-row gap-4 w-full'>
                  <div className='mb-4 w-full'>
                    <label htmlFor="firstname" className='block mb-1 font-playfair'>First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      className='bg-transparent text-white border-b border-white w-full outline-none'
                      required
                    />
                  </div>
                  <div className='mb-4 w-full'>
                    <label htmlFor="lastname" className='block mb-1 font-playfair'>Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      className='bg-transparent text-white border-b border-white w-full outline-none'
                      required
                    />
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row gap-4 w-full'>
                  <div className='mb-4 w-full sm:w-[49%]'>
                    <label htmlFor="email" className='block mb-1 font-playfair'>Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className='bg-transparent text-white border-b border-white w-full outline-none'
                      required
                    />
                  </div>
                </div>

                <div className='flex flex-col sm:flex-row w-full mt-10 sm:mt-20'>
                  <div className='mb-4 w-full'>
                    <label htmlFor="message" className='block mb-1 font-playfair'>Message</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      className='bg-transparent border-b border-white text-white p-2 w-full h-[100px] resize-none outline-none'
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className='bg-white text-black font-playfair p-2 px-20 text-[24px] w-full sm:w-auto'
                  disabled={loading}
                >
                  {loading ? 'SENDING...' : 'SUBMIT'}
                </button>
                {error && <p className='mt-4 text-red-500'>{error}</p>}
                {success && <p className='mt-4 text-green-500'>{success}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntouchImage;
