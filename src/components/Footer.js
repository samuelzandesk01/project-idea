import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Facebook from "../assets/img/social-icons/facebook.svg";
// import Twitter from "../assets/img/social-icons/twitter.svg";

export class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      about:
        "We focus on creating easy lifestyle for examination writting for 90% users over the globe",
    };
  }

  render() {
    return (
      <div className="footer mt-5 pb-5 pt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 pt-5">
              <div className="text-left">
                <Link>
                  <h3 className="navbar-text text-white font-bolder">
                    Exam Board
                  </h3>
                </Link>
                <p className="text-white">{this.state.about}</p>
              </div>
            </div>
            <div className="col-lg-2 pt-5 col-md-3 col-sm-12 col-xs-12 ">
              <div className="text-right pl-5">
                <ul className="footer-links">
                  <li>
                    <Link to="/AboutUs" className="text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-white">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/Login" className="text-white">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-white">
                      Sponsor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 pt-5 col-md-3 col-sm-12 col-xs-12 ">
              <div className="text-right pl-5">
                <ul>
                  <li>
                    <Link to="/ContactUs" className="text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-white">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-white">
                      Back
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 pt-5 pl-5 ml-5 col-md-3 col-sm-12 col-xs-12  ">
              <div className="text-right ">
                <ul>
                  <li>
                    <Link to="" className="text-white pl-4">
                      Jump Start
                    </Link>
                  </li>
                  <li>
                    <Link to="/AboutUs" className="text-white pl-4">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/ContactUs" className="text-white pl-4">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="" className="text-white pl-4">
                      Exams{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="hr"></div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-left ">
                <div className="">
                  <Link to="" className="text-white p-2">
                    <span className="fa fa-facebook border p-2"></span>
                  </Link>
                  <Link to="" className="text-white p-2">
                    <span className="fa fa-youtube border p-2"></span>
                  </Link>
                  <Link to="" className="text-white p-2">
                    <span className="fa fa-printest-O border p-2"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-right ml-5 ">
                <Link to="" className="text-white pl-3">
                  Home
                </Link>
                <Link to="" className="text-white pl-3">
                  Home
                </Link>
                <Link to="" className="text-white pl-3">
                  Home
                </Link>
                <Link to="" className="text-white pl-3">
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
