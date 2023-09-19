import React, { Component } from 'react'
import './header.css';

class Headerbutton extends Component {
  render() {
    return (
      
        <div className = 'header-button'>
        <a href=""><button className='btn cv'>Download CV</button></a>
        <a href=""><button className='btn talk'>Let's talk</button></a>
      </div>
      

    )
  }
}

export default Headerbutton
