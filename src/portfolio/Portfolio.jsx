import React, { Component } from 'react';
import IMG1 from '../assets/IMG_0045.jpeg';
import './portfolio.css';



const data =[
  {
      index:1,
      title: "title1",
      image: "image1",
      preview: "pre1"

  },

  {
      index:2,
      title: "title2",
      image: "image2",
      preview: "pre2"

  },

  {
      index:3,
      title: "title3",
      image: "image3",
      preview: "pre3"

  },

  {
      index:4,
      title: "title4",
      image: "image4",
      preview: "pre4"

  },

]


class Portfolio extends Component {
  render() {
    return (
      <>
        <section>
            <div className="container-fluid">
                <h5>My recent works</h5>
                <h2>Projects</h2>
                <div className="portfolio-container">
                  {
                    data.map((data) =>(
                      <article key={data.index}>
                      <img className='portfolio-image' src={IMG1} alt="" />
                      <h3>{data.title}</h3>
  
                      
                          <a href=""><button className='btn btn-md portfolio-button '>Preview</button></a>
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
