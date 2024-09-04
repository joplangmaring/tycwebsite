// 'use client';

// import React, { useState } from "react";
// import Image from "next/image";
// import Logo from "../../../public/logo/logo_white.png";
// import Logo_oval from "../../../public/logo/logo_oval_white.png";
// import { useRouter } from 'next/navigation'; 

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const router = useRouter();

//   const handleNavigation = async (href, sectionId) => {
//     try {
//       await router.push(href);
//       setTimeout(() => {
//         document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
//       }, 100);
//     } catch (error) {
//       console.error('Navigation error:', error);
//     }
//   };

//   return (
//     <header className={`flex justify-between items-center fixed z-40 w-screen h-[100px] px-4 md:px-8 transition-colors duration-500 bg-black text-white`}>
//       <div>
//         <span onClick={() => handleNavigation("/", "home")} className="cursor-pointer">
//           <Image 
//             src={Logo}
//             alt="Logo"
//             height={40}
//             width="auto"
//             className="hidden md:block" 
//           />
//           <Image 
//             src={Logo_oval}
//             alt="Logo"
//             height={70}
//             width="auto"
//             className="block md:hidden mx-3" 
//           />
//         </span>
//       </div>
//       <div className="hidden md:flex text-sm pr-10 space-x-10">
//         <span onClick={() => handleNavigation("/", "home")} className="cursor-pointer hover:text-gray-300 text-lg">
//           HOME
//         </span>
//         <span onClick={() => handleNavigation("/#about", "about")} className="cursor-pointer hover:text-gray-300 text-lg">
//           ABOUT
//         </span>
//         <span onClick={() => handleNavigation("/#vision", "vision")} className="cursor-pointer hover:text-gray-300 text-lg">
//           VISION
//         </span>
//         <span onClick={() => handleNavigation("/#events", "events")} className="cursor-pointer hover:text-gray-300 text-lg">
//           EVENTS
//         </span>
//         <span onClick={() => handleNavigation("/#contact", "contact")} className="cursor-pointer hover:text-gray-300 text-lg">
//           CONTACT
//         </span>
//       </div>
//       <div className="md:hidden flex my-auto mx-5">
//         <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
//           <svg className={`w-6 h-6 text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//       </div>
//       <div className={`md:hidden fixed inset-0 ${menuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out bg-white z-30`}>
//         <div className="flex justify-end p-11">
//           <button onClick={() => setMenuOpen(false)} className="focus:outline-none">
//             <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//         </div>
//         <div className="flex flex-col items-center space-y-4 mt-8">
//           <span onClick={() => { setMenuOpen(false); handleNavigation("/", "home"); }} className="text-black text-lg cursor-pointer">
//             HOME
//           </span>
//           <span onClick={() => { setMenuOpen(false); handleNavigation("/#about", "about"); }} className="text-black text-lg cursor-pointer">
//             ABOUT
//           </span>
//           <span onClick={() => { setMenuOpen(false); handleNavigation("/#vision", "vision"); }} className="text-black text-lg cursor-pointer">
//             VISION
//           </span>
//           <span onClick={() => { setMenuOpen(false); handleNavigation("/#events", "events"); }} className="text-black text-lg cursor-pointer">
//             EVENTS
//           </span>
//           <span onClick={() => { setMenuOpen(false); handleNavigation("/#contact", "contact"); }} className="text-black text-lg cursor-pointer">
//             CONTACT
//           </span>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;


'use client';

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/logo/logo_white.png";
import Logo_oval from "../../../public/logo/logo_oval_white.png";
import HomeImg from "./homeimg";

const Navbar = ({ aboutRef,homeRef, visionRef, eventsRef, contactRef }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`flex justify-between items-center fixed z-40 w-screen h-[100px] px-4 md:px-8 transition-colors duration-500 bg-black text-white`}>
      <div>
        <span onClick={() => scrollToSection(homeRef)} className="cursor-pointer">
          <Image 
            src={Logo}
            alt="Logo"
            height={40}
            width="auto"
            className="hidden md:block" 
          />
          <Image 
            src={Logo_oval}
            alt="Logo"
            height={70}
            width="auto"
            className="block md:hidden mx-3" 
          />
        </span>
      </div>
      <div className="hidden md:flex text-sm pr-10 space-x-10">
      <span onClick={() => scrollToSection(homeRef)} className="cursor-pointer font-playfair hover:text-gray-300 text-lg">
          HOME
        </span>
        <span onClick={() => scrollToSection(aboutRef)} className="cursor-pointer font-playfair hover:text-gray-300 text-lg">
          ABOUT
        </span>
        <span onClick={() => scrollToSection(visionRef)} className="cursor-pointer font-playfair hover:text-gray-300 text-lg">
          VISION
        </span>
        <span onClick={() => scrollToSection(eventsRef)} className="cursor-pointer font-playfair hover:text-gray-300 text-lg">
          EVENTS
        </span>
        <span onClick={() => scrollToSection(contactRef)} className="cursor-pointer font-playfair hover:text-gray-300 text-lg">
          CONTACT
        </span>
      </div>
      <div className="md:hidden flex my-auto mx-5">
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          <svg className={`w-6 h-6 text-white`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden fixed inset-0 ${menuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out bg-white z-30`}>
        <div className="flex justify-end p-11">
          <button onClick={() => setMenuOpen(false)} className="focus:outline-none">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-8">
        <span onClick={() => { setMenuOpen(false); scrollToSection(homeRef); }} className="text-black text-lg font-playfair cursor-pointer">
            HOME
          </span>
          <span onClick={() => { setMenuOpen(false); scrollToSection(aboutRef); }} className="text-black text-lg font-playfair cursor-pointer">
            ABOUT
          </span>
          <span onClick={() => { setMenuOpen(false); scrollToSection(visionRef); }} className="text-black text-lg font-playfaircursor-pointer">
            VISION
          </span>
          <span onClick={() => { setMenuOpen(false); scrollToSection(eventsRef); }} className="text-black text-lg font-playfaircursor-pointer">
            EVENTS
          </span>
          <span onClick={() => { setMenuOpen(false); scrollToSection(contactRef); }} className="text-black text-lg font-playfaircursor-pointer">
            CONTACT
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;



