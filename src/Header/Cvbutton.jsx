import React, { Component } from 'react';
import CV from '../assets/cv.pdf';

class Cvbutton extends Component {
  render() {
    return (
      
        <div >
        <a href={CV} download={CV}><button className='btn cv'>Get Resume</button></a>
      </div>
      

    )
  }
}

export default Cvbutton
