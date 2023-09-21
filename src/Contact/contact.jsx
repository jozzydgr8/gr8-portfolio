import React from 'react';
import './contact.css' ;
import emailjs from '@emailjs/browser';
import { createRef } from 'react';

 class contact extends React.Component {
    constructor(props) {
      super(props)
      this.formRef =React.createRef();
    
      this.state = {
         name:'',
         email:'',
         message:''
      }
    }

    sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qpo12y1', 'template_epwqbwr', this.formRef.current, 'b10IXvPfknOVV2I9I')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
          
      };
    handleChange = (event)=>{
        this.setState(
            {
                name: event.target.value
            }
        )
    };
    handleChange1 = (event)=>{
        this.setState(
            {
                email: event.target.value
            }
        )
    };
    handleChange2 = (event)=>{
        this.setState(
            {
                message: event.target.value
            }
        )
    };

    
  render() {

    return (
        
        <section id='Contact'>
            <div className="container-fluid">
                <h1>Contact Me</h1>
            <form ref = {this.formRef} onSubmit={this.sendEmail}>
                <div>
                     <input name='name' type="text" placeholder=' your fullname' onChange={this.handleChange} required/>
                </div>
                <div>
                    <input name='email' type="text" placeholder='your email' onChange={this.handleChange1} required   />
                </div>
                <div>
                    <textarea name="message" id="" cols="30" rows="10" placeholder='write your message' onChange={this.handleChange2} required></textarea>
                </div>
                
                 <input type="submit" className='btn btn-md btn-success' />
                
            </form>
            </div>
        </section>
    )
  }
}

export default contact
