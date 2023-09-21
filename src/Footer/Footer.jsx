import React, { Component } from 'react';
import './footer.css'

class Footer extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      
    }
    
    

  render() {
    const year = new Date().getFullYear();
    return (
      <footer>
         <small>©{year} jozzydgr8 portfolio</small>
      </footer>
    )
  }
}

export default Footer
