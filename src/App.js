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
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import PDF from './NewestResume2021.pdf'



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
    <main className="bg-coolGray-700 h-full w-full justify-center items-center grid grid-cols-1">
      <motion.section className="grid justify-center items-center h-32 mt-2"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 80 }}>
        <h1 className="text-5xl text-white items center justify-center flex">
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
          <IconContext.Provider value= {{ size: "2.5em", }}>
            <p className="grid relative justify-center items-center bottom-28 animate-bounce text-indigo-400">
              <IoIosArrowDown />
            </p>
          </IconContext.Provider>
      </motion.section>

      <motion.section className="grid relative justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}>
          <p className="text-white text-lg grid justify-center items-center text-center w-72 border-b-2 pb-10">I am an aspiring Front End designer and amateur videographer. Recently, I graduated from the Georgia Technical Institute of Technology obtaining my certification in Full Stack Web Development. I would love to work together and see what we can create!
          </p>
      </motion.section>

      <IconContext.Provider value= {{ size: "2em" }}>
        <section className="flex justify-center mb-20 mt-12">
          <ul className=" flex space-x-12">
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.linkedin.com/in/will-struder" target="_blank" rel="noopener noreferrer"><li><GrLinkedin /></li></a>
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.github.com/willstrudel" target="_blank" rel="noopener noreferrer"><li><GrGithub /></li></a>
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.youtube.com/channel/UCeEj5ctVxGU0cf8bDFX_KSA" target="_blank" rel="noopener noreferrer"><li><GrYoutube /></li></a>
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.instagram.com/willstruder/" target="_blank" rel="noopener noreferrer"><li><GrInstagram /></li></a>
          </ul>
        </section>
      </IconContext.Provider>

    </main>
    <footer className="w-full bottom-0 fixed inset-x-0 p-2 flex justify-center bg-black">
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
      
      <section className="pb-16">
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
      <footer className="w-full bottom-0 fixed inset-x-0 p-2 flex justify-center bg-black">
        <p className="text-white xs:text-xs text-sm md:text-lg">
          Copyright © 2021 Little River Studio LLC. Design by  
        </p> 
        <p className="font-poiret flex text-white xs:text-xs text-sm md:text-xl pl-2">
          Will Struder
        </p> 
      </footer>
  </>
);
}
  
// ---------------------------------------------------------/ Resume /-----------------------------------------------------------------//




function Resume() {
  const [numPages, setNumPages] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
  <>
  <main className="bg-coolGray-700 h-full w-full justify-center items-center grid">
    <header className="relative top-16 justify-center flex text-center mb-10">
      <h1 className="text-white text-5xl font-quicksand w-96">Take a Gander at my Resume!</h1>
    </header>
    <section className="mt-20">
      <Document file={PDF}
      onLoadSuccess={onDocumentLoadSuccess}>
        <p className="text-white text-sm">Page {1} of {3}</p>
        <Page pageNumber={1} />
        <p className="text-white text-sm">Page {2} of {3}</p>
        <Page pageNumber={2} />
        <p className="text-white text-sm">Page {3} of {3}</p>
        <Page pageNumber={3} />
      
      </Document>
    </section>
  </main>


  

    <footer className="w-full bottom-0 fixed inset-x-0 p-2 flex justify-center bg-black">
      <p className="text-white xs:text-xs text-sm md:text-lg">
        Copyright © 2021 Little River Studio LLC. Design by  
      </p> 
      <p className="font-poiret flex text-white xs:text-xs text-sm md:text-xl pl-2">
        Will Struder
      </p> 
    </footer>
  
  </>
  );
}


export default App;
