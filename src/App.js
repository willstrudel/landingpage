import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import MeAndHarley from './images/MeAndHarley.jpeg';
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import { GrLinkedin, GrYoutube, GrGithub, GrInstagram, } from 'react-icons/gr';
import { IconContext } from 'react-icons';
import { IoIosArrowDown } from "react-icons/io";
import { IoMdCheckmark } from 'react-icons/io';
import PDF1 from './images/ResumePg1.jpg'
import PDF2 from './images/ResumePg2.jpg'
import PDF3 from './images/ResumePg3.jpg'



function App() {
  return (
    <Router>
      <nav className="bg-black flex h-12 justify-around items-center text-white"> 
        <Link className="hover:bg-indigo-400 p-2 rounded-sm" to="/resume">Resume</Link>
        <Link className="hover:bg-teal-400 p-2 rounded-sm" to="/">Home</Link>
        <Link className="hover:bg-indigo-400 p-2 rounded-sm" to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>  
    </Router>
    );
  }
  

  // ---------------------------------------------------------/ Home /-----------------------------------------------------------------//

    function Home() {
  return (
  <>
    <main className="bg-coolGray-700 h-full w-full justify-center items-center grid grid-cols-1 md:grid-cols-2 md:p-4 lg:p-0">
      <motion.section className="grid justify-center items-center h-32 md:mt-12"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-quicksand text-white items center justify-center flex">
          Hello, I'm <span className="text-indigo-400 ml-2">Will</span>
        </h1>
      </motion.section>

      <section className="grid justify-center text-center items-center relative xs:bottom-4 md:top-48 md:h-44 md:align-middle">
        <motion.section className="bg-coolGray-600 rounded-md text-white wrap-words font-dosis grid justify-center items-center text-center relative md-top-0 md:text-xl lg:text-2xl h-12 md:h-32 lg:h-52 lg:w-96 w-80 p-6 pb-20 lg:p-12"
          initial={{ x: -5000 }}
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

      <motion.section className="grid justify-center items-center h-3/4 xs:mb-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}>
          <figure className="grid justify-center items-center">
            <div className="relative bg-teal-200 xs:h-60 xs:w-60 sm:h-80 sm:w-80 rounded-full xs:bottom-0 right-8 border-indigo-400 border-2"></div>
            <img className="relative rounded-full xs:h-60 xs:w-60 sm:h-80 sm:w-80 object-cover xs:bottom-44 sm:bottom-60 left-8 border-teal-200 border-2" src={MeAndHarley} alt=""></img>
          </figure>
          <IconContext.Provider value= {{ size: "2.5em", }}>
            <a  a href="#about" className="grid relative justify-center items-center bottom-36 animate-bounce text-indigo-400 md:invisible">
              <IoIosArrowDown  />
            </a>
          </IconContext.Provider>
      </motion.section>

      <motion.section id="about" className="grid relative justify-center xs:bottom-16 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}>
          <p className="text-white text-lg md:text-xl lg:text-2xl font-quicksand grid justify-center items-center text-center break-words p-16 sm:p-24 md:p-20 lg:p-24  md:mt-72 w-full">I am an aspiring Front End designer and amateur videographer. Recently, I graduated from the Georgia Technical Institute of Technology obtaining my certification in Full Stack Web Development. I would love to work together and see what we can create!
          </p>
      </motion.section>

      <IconContext.Provider value= {{ size: "2em" }}>
        <section className="flex justify-center mb-20 mt-12 md:mt-0 md:relative md:bottom-32">
         <motion.section className="grid justify-center items-center"
         initial={{ y: 250 }}
         animate={{ y: 0 }}
         transition={{ delay: 1, type: 'spring', stiffness: 80 }}>
          <ul className=" flex space-x-12 lg:space-x-24">
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.linkedin.com/in/will-struder" target="_blank" rel="noopener noreferrer"><li><GrLinkedin /></li></a>
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.github.com/willstrudel" target="_blank" rel="noopener noreferrer"><li><GrGithub /></li></a>
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.youtube.com/channel/UCeEj5ctVxGU0cf8bDFX_KSA" target="_blank" rel="noopener noreferrer"><li><GrYoutube /></li></a>
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.instagram.com/willstruder/" target="_blank" rel="noopener noreferrer"><li><GrInstagram /></li></a>
          </ul>
          </motion.section>
        </section>
      </IconContext.Provider>

    </main>
    <footer className="w-full bottom-0 fixed inset-x-0 xs:p-1 sm:p-2 flex justify-center bg-black">
      <p className="text-white xs:text-xs text-sm">Copyright © 2021 - Design by</p> 
      <p className="font-poiret flex text-white xs:text-xs text-sm ml-1">Will Struder</p> 
    </footer>
  </>
    
  );
}


// ---------------------------------------------------------/ Contact /-----------------------------------------------------------------//


const Contact = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm('gmail', 'gmail_template', e.target, 'user_vV2E4mjM9xhFdPV9RS0dP')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  }

  return (
  <>
    <IconContext.Provider value= {{ color: "white", size: "2em",}}>     
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>    
        <motion.section  
            initial={{
            opacity: 0,
            scale: 0,
            transition: {
            duration: 0.3,}
          }}
            animate={{
            opacity: 1,
            scale: 1,
            transition: {
            duration: 0.3,}
          }}
            exit={{
            opacity: 0,
          }}>
        <section>  
          <h2 className="font-dosis text-5xl flex justify-center font-bold pt-40 pb-6">
            Thank You!
          </h2>
            <p className="relative text-center xs:top-28 xs:px-12 sm:top-28 md:px-32 text-xl md:text-2xl px-20 md:top-80">Your message has been sent, I will get back to you as soon as possible. -Will
            </p>
          <div className="relative xs:top-36 sm:top-36 md:top-96 flex justify-center pt-20">
            <button className="border-black border bg-indigo-600 hover:bg-green-500 rounded-full md:p-2 md:text-lg" onClick={() => setModalIsOpen(false)}><IoMdCheckmark size="2.5em" />
            </button>
          </div>
        </section>
      </motion.section>
    </Modal>
            
       

    <main className="min-h-screen justify-center grid items-center bg-coolGray-700">
      <h1 className="flex justify-center uppercase font-black text-white text-6xl md:text-7xl lg:text-7xl">Contact</h1>
      
      <section className="pb-32">
        <section className="flex justify-center">
            <form onSubmit={sendEmail}>
              <div className="row mx-auto">
                <div className="col-8 form-group mx-auto">
                    <input type="text" className="form-control border-4 border-trueGray-200 rounded w-60" placeholder=" Name" name="name"/>
                </div>
                <div className="col-8 form-group pt-3 mx-auto">
                    <input type="email" className="form-control border-4 border-trueGray-200 rounded w-60" placeholder=" Email" name="email"/>
                </div>
                <div className="col-8 form-group pt-3 mx-auto">
                    <input type="text" className="form-control border-4 border-trueGray-200 rounded w-60" placeholder=" Subject" name="subject"/>
                </div>
                <div className="col-8 form-group pt-3 mx-auto">
                    <textarea className="form-control border-4 border-trueGray-200 resize rounded w-72" id="" cols="30" rows="8" placeholder=" Your Message" name="message"></textarea>
                </div>
                <div className="col-8 pt-3 mx-auto">
                    <input onClick={() => setModalIsOpen(true)} type="submit" className=" hover:bg-teal-500 uppercase font-semibold btn btn-info p-1.5 px-2.5 rounded text-white bg-sky-500" value="Submit"></input>
                </div>
              </div>
            </form>
          </section>
        </section>
      </main>
      </IconContext.Provider>
      <footer className="w-full bottom-0 fixed inset-x-0 xs:p-1 sm:p-2 flex justify-center bg-black">
        <p className="text-white xs:text-xs text-sm">Copyright © 2021 - Design by</p> 
        <p className="font-poiret flex text-white xs:text-xs text-sm ml-1">Will Struder</p> 
    </footer>
  </>
);
}
  
// ---------------------------------------------------------/ Resume /-----------------------------------------------------------------//




  function Resume() {
  return (
  <>
  <main className="bg-coolGray-700 h-full w-full justify-center items-center grid grid-cols-1">
    <header className="relative xs:top-8 top-16 justify-center flex text-center mb-10">
      <h1 className="text-white xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black w-96">RESUME</h1>
    </header>

    <section className="justify-center grid items-center relative xs:text-xs sm:text-sm md:text-md lg:text-lg xs:top-4 sm:top-12 font-quicksand text-indigo-400 z-50 ">
      <a className="hover:bg-black rounded-md p-1" href="https://docs.google.com/document/d/16OmvjKrAadPuvuemypkgKzCxK8beehkLvQ7woAlkWLA/edit?usp=sharing" target="_blank" rel="noreferrer" alt="ResumeDownload" download="ResumeForWebsite2021.pdf">- View on Google Docs -</a>
    </section>

    <section className="h-full grid justify-center relative items-center object-contain object-center overflow-hidden">
      <figure className="space-y-4 mt-20 
      xs:mt-4 xs:p-2 xs:mb-8 
      sm:mt-12 sm:p-6 sm:mb-12">
        <img className="" alt="pg1" src={PDF1}></img>
        <img className="" alt="pg2" src={PDF2}></img>
        <img className="" alt="pg3" src={PDF3}></img>
      </figure>
      </section>


  </main>
  <footer className="w-full bottom-0 fixed inset-x-0 xs:p-1 sm:p-2 flex justify-center bg-black">
      <p className="text-white xs:text-xs text-sm">Copyright © 2021 - Design by</p> 
      <p className="font-poiret flex text-white xs:text-xs text-sm ml-1">Will Struder</p> 
    </footer>
  
  </>
  );
  }



export default App;
