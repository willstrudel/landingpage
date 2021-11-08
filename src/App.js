import React from 'react';
import './App.css';
import { GrLinkedin, GrYoutube, GrGithub, GrInstagram, } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import MeAndHarley from './images/MeAndHarley.jpeg';
import { motion } from "framer-motion"
import { IoIosArrowDown } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import { BrowserRouter, Link } from 'react-router-dom';



function App() {
  return (
  <BrowserRouter>
    <main className="bg-gray-700 h-full w-full justify-center items-center grid grid-cols-1">
       
      <motion.section className="grid justify-center items-center h-32 mt-2"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}>
          <h1 className="text-4xl text-white items center justify-center flex">
            Hello, I'm <span className="text-indigo-400 ml-2">Will</span>
          </h1>
      </motion.section>

      <section className="grid justify-center items-center">
        <motion.section className="text-white font-quicksand grid justify-center items-center text-center h-12 w-72"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', delay: 2, duration: 1, stiffness: 60 }}>
            <Typewriter 
              options={{
                delay: 70,
                pauseFor: 2000,
                strings: ['Front End Flexibility with a Desire for Design.', '"Design is not a single object or dimension. Design is messy and complex." - Natasha Jen"'],
                autoStart: true,
                deleteSpeed: 20,
                loop: true,
              }}
            /> 
           
        </motion.section>
      </section>

      <motion.section className="grid justify-center items-center h-2/3 mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}>
          <figure className="grid justify-center items-center">
            <div className="relative bg-teal-200 xs:h-60 xs:w-60 sm:h-80 sm:w-80 rounded-full xs:bottom-0 right-8 border-indigo-400 border-2"></div>
            <img className="relative rounded-full xs:h-60 xs:w-60 sm:h-80 sm:w-80 object-cover xs:bottom-44 sm:bottom-60 left-8 border-teal-200 border-2" src={MeAndHarley} alt=""></img>
          </figure>
          <IconContext.Provider value= {{ size: "2em", }}>
            <p className="grid relative justify-center items-center bottom-32 animate-bounce text-indigo-400">
              <IoIosArrowDown />
            </p>
          </IconContext.Provider>
      </motion.section>

      <motion.section className="grid relative justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4, duration: 1 }}>
        <p className="text-white text-lg grid justify-center items-center text-center w-72">I am an aspiring Front End designer and amateur videographer. Recently, I graduated from the Georgia Technical Institute of Technology obtaining my certification in Full Stack Web Development. </p>
      </motion.section>

      <section className="flex items-center gap-x-16 justify-center mt-20">
        <motion.button className="border-b-2 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5, duration: .5 }}>
            <Link className="hover:bg-coolGray-900 text-indigo-400 rounded transition duration-200 ease-in-out p-4" to="./pages/contact.js">Resume</Link>
        </motion.button>
        <motion.button  className="border-b-2 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}>
            <a href="./pages/contact.js" className="hover:bg-coolGray-900 text-indigo-400 rounded transition duration-200 ease-in-out p-4">Contact</a>
        </motion.button>
      </section>

      
      <IconContext.Provider value= {{ size: "2em" }}>
      <motion.section className="grid justify-center items-center mb-40"
      initial={{ y: 250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}>
        <div className="flex justify-center relative top-24">
          <ul className="flex space-x-20">
            <a className=" text-indigo-400 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.linkedin.com/in/will-struder" target="_blank" rel="noopener noreferrer"><li><GrLinkedin /></li></a>
            <a className=" text-indigo-400 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.github.com/willstrudel" target="_blank" rel="noopener noreferrer"><li><GrGithub /></li></a>
            <a className=" text-indigo-400 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.youtube.com/channel/UCeEj5ctVxGU0cf8bDFX_KSA" target="_blank" rel="noopener noreferrer"><li><GrYoutube /></li></a>
            <a className=" text-indigo-400 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.instagram.com/willstruder/" target="_blank" rel="noopener noreferrer"><li><GrInstagram /></li></a>
          </ul>
        </div>   
      </motion.section>
      </IconContext.Provider>



      
    </main>

    <footer className="w-full bottom-0 fixed inset-x-0 p-2 flex justify-center bg-coolGray-900">
      <p className="text-white xs:text-xs text-sm">Copyright © 2021 - Design by</p> 
      <p className="font-poiret flex text-white xs:text-xs text-sm ml-1">Will Struder</p> 
    </footer>
  </BrowserRouter>
  );
}

export default App;
