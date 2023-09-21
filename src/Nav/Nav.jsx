import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import { AiOutlineBook} from 'react-icons/ai';
import { BsBalloonHeart } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  
    return (
      <nav>
        <a href="#Header" onClick={()=> setActiveNav('#') } className={activeNav === '#' ? 'active' : ''}>< AiOutlineHome className='nav-icons' /></a>
        <a href="#About" onClick={()=> setActiveNav('#About') } className={activeNav === '#About' ? 'active' : ''}><FiUser className='nav-icons' /></a>
        <a href="#Portfolio" onClick={()=> setActiveNav('#Portfolio') } className={activeNav === '#Portfolio' ? 'active' : ''}><AiOutlineBook className='nav-icons' /></a>
        <a href="#Experience" onClick={()=> setActiveNav('#Experience') } className={activeNav === '#Experience' ? 'active' : ''}><BsBalloonHeart className='nav-icons' /></a>
        <a href="#Contact" onClick={()=> setActiveNav('#Contact') } className={activeNav === '#Contact' ? 'active' : ''}><AiOutlineMessage className='nav-icons'  /></a>
        
      </nav>
    )
  
}

export default Nav
