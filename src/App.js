
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css';
import Header from './Header/Header';
import About from './About/about';
import Experience from './Experience/Experience';
import Portfolio from './portfolio/Portfolio';
import Contact from './Contact/contact';
import Nav from './Nav/Nav';
import Footer from './Footer/Footer';

export class App extends Component {
  render() {
    return (
      <>
        <Header />

        <About experience = "2+ years" clients= "loading..." projects="loading..." >
          I am a front end developer,
          I possess a diverse skill set that includes expertise 
          in HTML, CSS, and JavaScript. I am well-versed in the art
          of creating visually captivating and interactive websites.
          With a keen eye for design, I excel in implementing responsive
          web design techniques to ensure seamless user experiences across various devices.
        </About>

        <Experience />
        <Portfolio />
        <Contact />
        <Nav />
        <Footer />
        


        

      </>
    )
  }
}



export default App;
