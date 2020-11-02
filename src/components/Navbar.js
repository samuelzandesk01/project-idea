import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <section className="">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand navbar-text" to="/">
                EXAMS BOARD
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  className="bi bi-filter-right"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"
                  />
                </svg>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link text-white" to="/">
                      Home{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/AboutUs">
                      About
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link "
                      to="/ReasonWhy"
                      id="navbarDropdown"
                    >
                      Reason Why
                    </Link>
                    
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      to="/Services"
                    >
                      Service
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/Login">
                      <i className="fa fa-user"></i> Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      to="/ContactUs"
                      
                    >
                      <i className="fa fa-message"></i> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

         
      </section>
    );
  }
}

export default Navbar;
