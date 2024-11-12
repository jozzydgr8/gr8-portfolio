import React, { Component } from 'react';
import { FaGithub } from "react-icons/fa";
import './portfolio.css';
import {Data }from '../Data'


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
                    Data && Data.map(data=>(
                      <article key={data.id}>
                        
                        <img className='portfolio-image' src={data.image} alt="" />
                            
                            <div>
                            <h3>{data.title}</h3>
    
                            <div>
                            {data.desc}
                            </div>
                            <a href={data.live} target='_blank'>
                            <button className='btn btn-md portfolio-button '>Preview</button>
                            </a>
                            </div>
                        </article>
                    ))
                  }
                    
                      


                      
                  
                  
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
