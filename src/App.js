import { useEffect } from 'react';
import Home from './components/home/intro';
import Navbar from './components/nav-bar/nav';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Footer from './components/footer/footer';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import ContactMe from './components/contact/ContactMe';
// import Contact from './components/';

function App ()
{
  useEffect( () =>
  {
    Aos.init()
Aos.refresh()
  },[])
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <ContactMe />
      <Footer/>
    </>
  );
}

export default App;
