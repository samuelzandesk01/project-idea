import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NewsLetter from './NewsLetter';
import Footer from './Footer';


export class ContactUs extends Component {
    render() {
        return (
            <div>
                <NewsLetter />
                <div className="container my-pt mb-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-left">
                                <h5>Contact Us.</h5>
                                <p>If there's something we can help you with, jut let us know. We'll be more than happy to offer you our help</p>
                            </div>
                            <form className="text-left" >
                                <div className="form-div">
                                    <input type="text" placeholder="Your Name...." className="contact-input"/>
                                </div>
                                <div className="form-div">
                                    <input type="email" placeholder="Your Email...." className="contact-input"/>
                                </div>
                                <div className="form-div">
                                    <textarea rows="5" cols="50" placeholder="Your Message"></textarea>
                                </div>
                                <div className="form-div pt-3">
                                    <button className="sign-up" >Submit </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-left">
                                 <h3>No. 2, Oladele Ojogbede Ilasan <br /> Lekki Lagos</h3>

                                 <h5 > <span>E:</span> <Link to="">@examborad.org</Link> </h5 >
                                 <h5 > <span>T:</span> 0812 739 1651  </h5 >

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ContactUs
