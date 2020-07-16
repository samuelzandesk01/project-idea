import React, { Component } from 'react';
import Preview from '../assets/img/undraw_dev_productivity_umsq.svg';

import JumpStart from './JumpStart';
import Footer from './Footer';
import NewsLetter from './NewsLetter';
import WhatYouNeed from './WhatYouNeed';


export class AboutUs extends Component {
    render() {
        const Blend = {
            color: "#6c63ff"
        }
        return (
            <div>
               <section>
                   <div className="container">
                       <div className="row" >
                            <div className="col-lg-6 col-xl-6 my-mt pt-5">
                                <div className="img-fluid pr-5" >
                                    <img src={Preview} alt="" width="100%" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 my-mt pt-5">
                                <div className="text-right" >
                                    <h2 style={Blend}>Reasons Why <br /> you should</h2>
                                    <p >With Exam Board you get components and examples, including tons of variables that will help you customize this theme with ease.</p>
                                        <button className="sign-up">Get Involve</button>
                                </div>
                            </div>
                       </div>
                   </div>
               </section>
                <WhatYouNeed />

               <JumpStart />
                <NewsLetter />
               <Footer />
            </div>
        )
    }
}

export default AboutUs
