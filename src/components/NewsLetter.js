import React, { Component } from "react";
import HexOne from "../assets/img/hex-1.png";

export class NewsLetter extends Component {
  render() {
    return (
      <div>
        <section className="newsletter">
          <div className="container">
            <div className="text-center pt-4">
              <h1>Stay in touch with just a click </h1>
              <div className="form-wrapper">
                <input
                  type="email"
                  placeholder="Submit to our Newsletter...."
                  className="input-i"
                />
                <input type="submit" className="input-sub" />
              </div>
            </div>
            <div className="pl-4">
              <div className=" pl-5 ml-5 pt-4">
                <img src={HexOne} alt="" width="100" className="hex" />
              </div>
            </div>
          </div>
        </section>
        <div className="anim-right"></div>

      </div>
    );
  }
}

export default NewsLetter;
