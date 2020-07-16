import React, { Component } from 'react';
import Presentation from '../assets/img/presentation-1.png';
import WorkWith from './WorkWith';

export class JumpStart extends Component {

    render() {
        const Border = {
            border: '0.2px solid white',
            color: '#5b53ff',
            background: 'white'
        }
        return (
            <div>
                <section className="jump-start my-pt"> 
                    <div className="container">
                        <div className="text-center">
                            <h2 className="font-weight-bolder text-uppercase">Are you a starter?</h2>
                            <p>Try our app out to jumpstart and start all exams from your comfort zones.</p>
                            <button className="sign-up" style={Border}>Get Started <i className="fa fa-forward-arrow"></i> </button>
                        </div>
                    </div>
                </section>

                <section className="my-pt">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 pt-5" >
                                <div className="text-left"> 
                                     <h2 className="text-uppercase font-weight-bolder " >Solution Useability</h2>
                                     <p>All solutions are avaliable on different platforms and accessories, This conceder us creating a global problem solving application..</p>
                                     <button className="read-more">Find More</button>
                                </div>
                            </div>
                            <div className="col-lg-6" >
                                <div className="img-responsive"> 
                                    <img src={Presentation} width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <WorkWith />
            </div>
        )
    }
}

export default JumpStart
