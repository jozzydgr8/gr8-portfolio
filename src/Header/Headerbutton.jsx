import React, { Component } from 'react'
import './header.css';
import CV from '../assets/cv.pdf'

class Headerbutton extends Component {
  render() {
    return (
      
        <div className = 'header-button'>
        <a href={CV} download={CV}><button className='btn cv'>Download CV</button></a>
        <a href="https://wa.link/jlaiwr" target='_blank'><button className='btn talk'>Let's talk</button></a>
      </div>
      

    )
  }
}

export default Headerbutton
