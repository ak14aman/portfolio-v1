import { useEffect } from "react";
import Aos from "aos";

import './App.css';


import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import About from "./Components/UI/About";
import Timeline from "./Components/UI/Timeline";
import Projects from "./Components/UI/Projects";
import Contact from "./Components/UI/Contact";
import Experience from "./Components/UI/Experience"

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
    <Header/>
    <main>
      <About/>
      <Timeline/>
      <Projects/>
      <Experience />
      <Contact/>

    </main>
    <Footer/>
    </>
  );
}

export default App;
