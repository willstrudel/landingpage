import './App.css';

function App() {
  return (
  <>
    <main className="bg-gray-700 h-screen grid grid-cols-1">
       
      <section className="grid justify-center items-center h-50">
        <h1 className="text-3xl text-white items center justify-center flex">Hello, I'm<span className="text-indigo-400 ml-2">Will</span></h1>
        <p className="grid justify-center text-white items-center ">Front End Flexibility with a Desire for Design</p>
      </section>

      <section className="grid justify-center items-center">
        <p className="text-white">uWu</p>
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
