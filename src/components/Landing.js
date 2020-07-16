import React from "react";
// import { Link } from "react-router-dom";
import SideImage from "../assets/img/illustration-2.svg";
// import HexTwo from "../assets/img/hex.png";

export class Landing extends React.Component {
  render() {
    const Blend = {
      color: "#6c63ff",
    };
    return (
      <div>
        <section class="container">
        <div className="anim-right pt-5"></div>
        <div className="anim"></div>
          <div class="row">
            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xs-12">
              
              <div class="text-left my-pt">
                <h2 style={Blend}>
                  Exam should <br /> by ease
                </h2>
                <p style={Blend}>
                  What is wrong if we all write exams from our comfort zones?
                  Create an account now, let make it easy.
                </p>
                <button class="sign-up mr-1">Sign Up &#x2794;</button>
                <button class="write-exam">Start Exam &#x2794; </button>
              </div>
              <div class="ball-bounce"></div>
              
            </div>
            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-xs-12">
              <div class="icon-anime"></div>
              <div class="text-left my-pt ml-5">
                <img
                  src={SideImage}
                  class="img-responsive img-fluid side-img"
                  alt=""
                  width="80%"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Landing;
