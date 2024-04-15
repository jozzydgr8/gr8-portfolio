import React, { Component } from 'react'
import './header.css';
import image from '../assets/IMAGE.png'
import { AiOutlineInstagram } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import HeaderButton from './HeaderButton';


 class Header extends Component {

  render() {
    
    return (
      <>
        <section id='Header'>
            <div className="container-fluid">
                <h5>hello i'm</h5>
                <h2 >Akande Joshua</h2>
                <h6 className='alternate'>Software Developer</h6>
                <div className="links-header">
                  <a href="https://instagram.com/jozzydgr8?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'> <AiOutlineInstagram/> </a>
                  <a href="https://github.com/jozzydgr8" target='_blank'> <BsGithub/> </a>
                  <a href="https://wa.link/jlaiwr" target='_blank'><BsWhatsapp /></a>
                </div>
                <a className='scroll-down' href="#Portfolio">scroll down</a>
                <HeaderButton />
                <img className='my-image' src={image} alt="" />



            </div>
        </section>
      </>
    )
  }
}

export default Header
