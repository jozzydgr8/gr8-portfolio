import React from 'react';
import Cvbutton from './Cvbutton';
import TalkButton from './TalkButton';

function HeaderButton() {
  return (
    <div className='header-button'>
        <Cvbutton />
        <TalkButton />
    </div>
  )
}

export default HeaderButton