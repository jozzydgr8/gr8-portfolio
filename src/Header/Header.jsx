import React, { Component } from 'react'
import './header.css';
import Headerbutton from './Headerbutton';
import image from './IMAGE.png';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';


 class Header extends Component {
  render() {
    return (
      <>
        <section>
            <div className="container-fluid">
                <h5>hello i'm</h5>
                <h2>Akande Joshua</h2>
                <h6>Front-end developer</h6>
                <div className="links-header">
                  <a href=""> <AiOutlineInstagram/> </a>
                  <a href=""> <BsGithub/> </a>
                  <a href=""> <BsWhatsapp /></a>
                </div>
                <a className='scroll-down' href="#">scroll down</a>
                <Headerbutton />
                <img className='my-image' src={image} alt="" />



            </div>
        </section>
      </>
    )
  }
}

export default Header
