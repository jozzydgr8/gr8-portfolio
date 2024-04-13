import backend from '../assets/backend.jpg';
import frontend from '../assets/frontend.jpeg';
import html from '../assets/html-5.png';
import css from '../assets/css-3.png';
import JavaScript from '../assets/java-script.png';
import reactLogo from '../assets/physics.png';
import native from '../assets/react.png';
import node from '../assets/nodejs.png';
import express from '../assets/express.png';
import firebase from '../assets/firebase.png';
import database from '../assets/database.png';
import './service.css';
export const Services = ()=>{
    return(
        <>
            <section id='service'>
                <div className='container-fluid'>
                    <h2>Services</h2>
                    <div className=" servicegrid">
                        <div className=" servicediv">
                            <img src={frontend} alt='front end' />
                            <div className='servicewrite'>
                                <div className='row'>
                                    <p className='col-6'>FRONT-END DEVELOPMENT</p>
                                    <p className='col-6 ratingservice'>⭐ 5.0</p>
                                </div>
                                <p>as a front end developer,
                                    I possess a diverse skill set that includes expertise 
                                    in HTML, CSS, and JavaScript. I am well-versed in the art
                                    of creating visually captivating and interactive applications.
                                </p>
                                <div className='service-logo-container'>
                                    <img src={html} alt='logo' className='service-logo' />
                                    <img src={css} alt='logo' className='service-logo' />
                                    <img src={JavaScript} alt='logo' className='service-logo' />
                                    <img src={reactLogo} alt='logo' className='service-logo' />
                                    <img src={native} alt='logo' className='service-logo' />
                                </div>
                                
                            </div>

                        </div>


                        {/* backend */} 

                        <div className=" servicediv">
                            <img src={backend} alt='back end' />
                            <div className='servicewrite'>
                                <div className='row'>
                                    <p className='col-6'>BACK-END DEVELOPMENT</p>
                                    <p className='col-6 ratingservice'>⭐ 3.0</p>
                                </div>
                                <p>
                                    With my knowledge in JavaScript and NodeJs,
                                    I build efficient sever-side systems that powers websites and applications.
                                    From handling databases to implementing API's.
                                </p>
                                <div className='service-logo-container'>
                                    <img src={JavaScript} alt='logo' className='service-logo' />
                                    <img src={node} alt='logo' className='service-logo' />
                                    <img src={express} alt='logo' className='service-logo' />
                                    <img src={database} alt='logo' className='service-logo' />
                                    <img src={firebase} alt='logo' className='service-logo' />
                                </div>
                                
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}