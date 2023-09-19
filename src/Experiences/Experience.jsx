import React, { Component } from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs'

class Experience extends Component {
  render() {
    return (
      <>
      <section>
        <div className="container-fluid">
            <h5>What skills i have</h5>
            <h2>My Experience</h2>

            <div className="row">
                <div className="col-md-6">
                            <div className="experience-container">
                            <h4>Frontend Development</h4>
                            <article>
                                <BsFillPatchCheckFill className='check-icon' />
                                <div className='experience-details'>
                                    <h5>HTMl</h5> 
                                    <small>Experienced</small>
                                </div>
                            </article>

                            <article>
                                 <BsFillPatchCheckFill className='check-icon' />
                                <div className='experience-details'>
                                    <h5>CSS</h5>
                                    <small>intermediate</small>
                                </div>
                            </article>

                            <article>
                                 <BsFillPatchCheckFill className='check-icon' />
                                <div className='experience-details'>
                                    <h5>javaScript</h5>
                                    <small>Experienced</small>
                                </div>
                            </article>

                            <article>
                                 <BsFillPatchCheckFill className='check-icon' />
                                <div className='experience-details'>
                                    <h5>React</h5>
                                    <small>Experienced</small>
                                </div>
                            </article>

                            <article>
                                 <BsFillPatchCheckFill className='check-icon' />
                                <div className='experience-details'>
                                    <h5>Node.js</h5>
                                    <small>Experienced</small>
                                </div>
                            </article>

                            <article>
                                 <BsFillPatchCheckFill className='check-icon' />
                                <div className='experience-details'>
                                    <h5>git</h5>
                                    <small>Experienced</small>
                                </div>
                            </article>



                            <article>
                                 <BsFillPatchCheckFill className='check-icon' />
                                <div className='experience-details'>
                                    <h5>API</h5>
                                    <small>Experienced</small>
                                </div>
                            </article>
                        </div>
                </div>

                {/* =====end of first section======= */}

                {/* ======second section begins services====== */}
                <div className="col-md-6 experience-container-service">
                <div className="experience-container">
                <h4>Services</h4>
                <article>
    
                    <div className='experience-details'>
                        creating visually captivating and interactive websites,
                    </div>
                </article>

                <article>
                    
                    <div className='experience-details'>
                    implementing responsive web design techniques to ensure 
                     seamless user experiences across various devices,
                    </div>
                </article>

                <article>
                     
                    <div className='experience-details'>
                        building efficient and scalable applications
                    </div>
                </article>

                
            </div>
                </div>
            </div>
           
        </div>
      </section>
      </>
    )
  }
}

export default Experience
