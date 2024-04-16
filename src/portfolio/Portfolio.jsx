import React, { Component } from 'react';
import IMG1 from '../assets/IMG_0045.jpeg';
import './portfolio.css';
import image1 from '../assets/img1.jpeg';
import image2 from '../assets/img2.png';



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
                  {
                    data.map((data) =>(
                      <article key={data.index}>
                      <img className='portfolio-image' src={data.image} alt="" />
                      <h3>{data.title}</h3>
  
                      
                          <a href= {data.preview} target='_blank'><button className='btn btn-md portfolio-button '>Preview</button></a>
                      </article>
                    ))
                  }
                </div>
                
                <a href="https://github.com/jozzydgr8" target='_blank'>visit my github</a>

               
            </div>
        </section>
      </>
    )
  }
}

export default Portfolio
