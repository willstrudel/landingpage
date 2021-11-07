import './App.css';
import { GrLinkedin, GrYoutube, GrGithub, GrInstagram, } from 'react-icons/gr';

function App() {
  return (
  <>
    <main className="bg-gray-700 h-screen grid grid-cols-1">
       
      <section className="grid justify-center items-center h-32 mt-12">
        <h1 className="text-3xl text-white items center justify-center flex">
          Hello, I'm <span className="text-indigo-400 ml-2">Will</span>
        </h1>
        <p className="grid justify-center text-white items-center mt-8">
          Front End Flexibility with a Desire for Design
        </p>
        <figure className="grid justify-center items-center mt-20">
          <div className="bg-teal-200 h-80 w-80 rounded-full"></div>
        </figure>
      </section>

      

      <section className="grid justify-center items-center">
        <div className="flex justify-center">
          <ul className="flex space-x-12">
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.linkedin.com/in/will-struder" target="_blank" rel="noopener noreferrer"><li><GrLinkedin /></li></a>
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.github.com/willstrudel" target="_blank" rel="noopener noreferrer"><li><GrGithub /></li></a>
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.youtube.com/channel/UCeEj5ctVxGU0cf8bDFX_KSA" target="_blank" rel="noopener noreferrer"><li><GrYoutube /></li></a>
            <a className=" text-indigo-400 visited:text-blue-300 App-link hover:scale-125 hover:-translate-y-2 transform-gpu" href="https://www.instagram.com/willstruder/" target="_blank" rel="noopener noreferrer"><li><GrInstagram /></li></a>
          </ul>
        </div>   
      </section>



      
    </main>

    <footer className="w-full bottom-0 fixed inset-x-0 p-2 flex justify-center bg-coolGray-900">
      <p className="text-white xs:text-xs text-sm">Copyright © 2021 - Design by</p> 
      <p className="font-poiret flex text-white xs:text-xs text-sm ml-1">Will Struder</p> 
    </footer>
  </>
  );
}

export default App;
