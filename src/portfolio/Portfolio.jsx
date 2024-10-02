import React, { Component } from 'react';
import { FaGithub } from "react-icons/fa";
import './portfolio.css';
import image1 from '../assets/Portfolio/WhatsApp Image 2024-10-01 at 07.52.35.jpeg';
import image2 from '../assets/Portfolio/WhatsApp Image 2024-10-01 at 07.52.36.jpeg';
import image3 from '../assets/Portfolio/WhatsApp Image 2024-10-01 at 07.52.52.jpeg'




const data =[]


class Portfolio extends Component {
  render() {
    return (
      <>
        <section id='Portfolio'>
            <div className="container-fluid">
                <h5>My recent works</h5>
                <h2 className='alternate'>Projects</h2>
                <div className="portfolio-container">
                  
                  
                    
                      <article>
                      <img className='portfolio-image' src={image2} alt="" />
                          
                          <div>
                          <h3>Mag's Resident</h3>
  
                          <div>
                          A functional apartment website that combines clean design with intuitive navigation and 
                          responsiveness(mobile).
                          </div>
                          <a href='https://jozzydgr8.github.io/apartments/' target='_blank'>
                          <button className='btn btn-md portfolio-button '>Preview</button>
                          </a>
                          </div>
                      </article>


                      <article>
                      <img className='portfolio-image' src={image3} alt="" />
                      
                          <div>
                          <h3>Medical E-commerce website</h3>
                          <div>An interactive and secure e-commerce
                          platform for medical equipment’s
                          </div>
                          <br/>
  
                      
                          <a href='https://jozzydgr8.github.io/medical/' target='_blank'>
                          <button className='btn btn-md portfolio-button '>Preview</button>
                          </a>
                          </div>
                      </article>


                      <article>
                      <img className='portfolio-image' src={image1} alt="" />

                          <div>
                          <h3>Ejuandy </h3>
                          
                          <div>
                          A comprehensive and interactive web application to showcase information and details of a communications and 
                          entertainment consultancy company in Nigeria
                          </div>
                      
                          <a href='https://jozzydgr8.github.io/ejuandy/' target='_blank'>
                          <button className='btn btn-md portfolio-button '>Preview</button>
                          </a>
                          </div>
                      </article>
                  
                  
                </div>
                
                <br/>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',fontSize:'22px'}}>
                <a href="https://github.com/jozzydgr8" target='_blank'>visit my github</a> 
                <FaGithub/>
                </div>

               
            </div>
        </section>
      </>
    )
  }
}

export default Portfolio
