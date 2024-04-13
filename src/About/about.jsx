import React, { Component } from 'react';
// import Image from './IMAGE.png';
// import './about.css'
// import { FaAward } from 'react-icons/fa';
// import { FiUsers } from 'react-icons/fi';
// import { BsFolderCheck } from 'react-icons/bs'
// import TalkButton from '../Header/TalkButton';


 class about extends Component {
  render() {
    return (
      <>
      {/* <section id='About'>
        <div className="container-fluid">
             <h5>Get to know</h5>
             <h2 className='alternate'>About me</h2>

             <div className="row">
              <div className="col-md-6">
                  <img className='about-image' src= {Image} alt="" />
              </div>
              <div className="col-md-6 about-column-two">
                <div className="about-grid">

                  <article>
                      <FaAward className='about-icons'/>
                    <h5>Experience</h5>
                    <small>{this.props.experience}</small>
                  </article>

                  <article>
                   <FiUsers className='about-icons'/>
                    <h5>Clients</h5>
                    <small> {this.props.clients} </small>
                  </article>

                  <article>
                    <BsFolderCheck className='about-icons'/>
                    <h5>Projects</h5>
                    <small>{this.props.projects}</small>
                  </article>

                </div>
                

                <p className='about-paragraph'>
                  {this.props.children}
                </p>

                <main>
                <TalkButton />
                </main>


              </div>
             </div>
        </div>
      </section> */}

      
      </>
    )
  }
}

export default about
