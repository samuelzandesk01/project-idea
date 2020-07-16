import React from "react";
// import { Link } from "react-router-dom";

import Headset from "../assets/img/undraw_coding_6mjf.png";
import HexOne from "../assets/img/hex-1.png";
import HexTwo from "../assets/img/hex.png";

import StressReduction from "./StressReduction";
import HoverCard from "./HoverCard";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import Badge from './Badge';


class Services extends React.Component {
  state = {
    quotes: "_ By Robert Byson",
    cardTitleOne: "Easy To Use",
    cardTitleTwo: "Simple Useability",
    cardTitleThree: "Stress Reduction",
    cardItemTwo:
      "With you get components and examples, including tons of variables that will help you customize this theme with ease.",
    cardItemThree:
      "With you get components and examples, including tons of variables that will help you customize this theme with ease."
  };

  render() {
    return (
      <center>
        <section className="service-sec">
          <div className="headset"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 my-pt text-left">
                <Badge />
                <h3>Our Services</h3>
                <p>
                  With you get components and examples, including tons of
                  variables that will help you customize this theme with ease.
                </p>
                <button className="write-exam">What we do</button>

                <div className=" pt-4 mt-3">
                  <img src={HexOne} alt="" width="100" className="hex" />
                </div>
                <div className="ml-5">
                    <img src={HexTwo} alt=""  width="90" className="hex-two" />
                </div>

              </div>
              <div className="col-lg-6">
                <div className="img-div">
                  <img src={Headset} alt="" />
                  {/* <div className=" " >
                    <img src={HexOne} alt="" width="100"  className="hex" />
                </div> */}
                </div>
              </div>
            </div>

            <StressReduction className="text-center justify-content-center" />
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section className="w-100 my-pt">
          <div className="container text-center my-pt">
            <div className="row">
              <div className="col-lg-12">
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <ol class="carousel-indicators">
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="1"
                    ></li>
                    <li
                      data-target="#carouselExampleIndicators"
                      data-slide-to="2"
                    ></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active  text-center">
                      <i>
                        <h4 className="quote">Jame Marley</h4>
                      </i>
                      <p>With you get components and examples, including tons of variables that will <br/> help you customize this theme with ease.</p>
                    </div>
                    <div class="carousel-item  text-center">
                      <i>
                        <h4 className="quote">Jame Marley</h4>
                      </i>
                      <p>With you get components and examples, including tons of variables that will <br/> help you customize this theme with ease.</p>
                    </div>
                    <div class="carousel-item  text-center">
                      <i>
                        <h4 className="quote">Jame Marley</h4>
                      </i>
                      <p>With you get components and examples, including tons of variables that will <br/> help you customize this theme with ease.</p>
                    </div>
                  </div>
                  <hr />

                  <br />
        <br />
        <br />


                  <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      class="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      class="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HoverCard />
        <NewsLetter />
        <Footer />
      </center>
    );
  }
}

export default Services;
