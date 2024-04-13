import React, { Component } from 'react';
import './experience.css';
import {Progress} from 'antd';
import cert from '../assets/certificate.jpeg'

class Experience extends Component {
  render() {
    return (
      <>
      <section id='Experience'>
            <div className='container-fluid'>
            <h5>What skills i have</h5>
            <h2 className='alternate'>My Experience</h2>
                <div className="container">
                <h1>
                    Akande Joshua
                </h1>
                <p>a young programmer with diverse skill set in software development,
                loves to create visually appealing applications and write clean functional codes</p>
                <a download={cert} href={cert} className='btn btn-outline-primary'>view certificate</a>

                <main>
                    <div className='skill-grid'>
                        <div className=' skill '>
                            html
                            <Progress percent={90} type='line' strokeColor={'green'}/>
                        </div>
                        <div className=' skill '>
                            css
                            <Progress percent={70} type='line' strokeColor={'gold'}/>
                        </div>
                        
                        <div className=' skill '>
                            JavaScript
                            <Progress percent={90} type='line' strokeColor={'green'}/>
                        </div>

                        <div className=' skill '>
                            React
                            <Progress percent={93} type='line' strokeColor={'green'}/>
                        </div>

                        <div className=' skill '>
                            NodeJs
                            <Progress percent={70} type='line' strokeColor={'gold'}/>
                        </div>

                        <div className=' skill '>
                            MongoDb
                            <Progress percent={90} type='line' strokeColor={'green'}/>
                        </div>
                        
                        
                    </div>
                </main>
                </div>

            </div>
      </section>
      </>
    )
  }
}

export default Experience
