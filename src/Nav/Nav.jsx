import React, { Component } from 'react';
import './nav.css';
import { BiHomeSmile } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai'; 
import { AiOutlineBook} from 'react-icons/ai';
import { BsBalloonHeart } from 'react-icons/bs';
import { GrContact } from 'react-icons/gr';

class Nav extends Component {
  render() {
    return (
      <nav>
        <a href=""><AiOutlineUser /></a>
        <a href=""><AiOutlineUser/></a>
        <a href=""><AiOutlineBook/></a>
        <a href=""><BsBalloonHeart/></a>
        <a href=""><GrContact /></a>
      </nav>
    )
  }
}

export default Nav
