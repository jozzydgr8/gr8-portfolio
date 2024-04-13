import React, { Component } from 'react';
import IMG1 from '../assets/IMG_0045.jpeg';
import './portfolio.css';
import image1 from '../assets/img1.jpeg';
import image2 from '../assets/img2.png';
import image3 from '../assets/img3.webp';
import image4 from '../assets/img4.png';



const data =[
  {
      index:1,
      title: "EIC project",
      image: image1,
      preview: "https://jozzydgr8.github.io/EIC-project/"

  },

  {
      index:2,
      title: "Nibi template",
      image: image2,
      preview: "https://jozzydgr8.github.io/nibi-foundation/"

  },

  {
      index:3,
      title: "MovieBox",
      image: image3,
      preview: "https://jozzydgr8.github.io/moviebox/"

  },

  {
      index:4,
      title: "Fortrez template",
      image: image4,
      preview: "https://jozzydgr8.github.io/fortrez/"

  },

]


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
                

               
            </div>
        </section>
      </>
    )
  }
}

export default Portfolio
