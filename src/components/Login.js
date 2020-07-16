import React, { Component } from "react";
import { Link } from "react-router-dom";
import Google from "../assets/img/social-icons/google.png";
import Printest from "../assets/img/social-icons/printest.png";
import Facebook from "../assets/img/social-icons/facebook.svg";

export class Login extends Component {
  
  state = {
    message: "",
  }


  LoginSubmit = () =>{
    this.setState({
      message: "Thank you for your time, Response will be sent ASAP.."
    });
  }
  render() {
      const Mt = {
          marginTop: '150px'
      }
    return (
      <div>
        <div className="container">
          <div className="row">
            <div style={Mt} className="col-lg-7 my-pt">
              <div className="text-left">
                <i>
                  <h4>
                    With you get components and examples, including tons of
                    variables that will help you customize this theme with ease.
                  </h4>
                </i>
                <h3>
                  <span className="quote">_</span>Badmos James{" "}
                </h3>
              </div>
            </div>
            <div className="col-lg-5 col-xl-5 rounded mt-5">
              <p>{this.state.message}</p>
              <form action="" className=" form-wrapper py-5  border shadow">
                <div className=" pl-5 mt-3 text-left">
                  <h4 className="font-weight-bolder text-uppercase">Login</h4>
                  <p>Sign in to your account to continue.</p>
                </div>
                <div className="form-group text-left pl-5">
                <span className="fas fa-user p-2 border bg-light" ></span>
                  <input
                    type="text"
                    placeholder="Username"
                    className="loginInput"
                  />
                </div>
                <div className="form-group text-left pl-5">
                <span className="fas fa-key p-2 border bg-light" ></span>
                  <input
                    type="password"
                    placeholder="Enter Password"
                    className="loginInput"
                  />
                  <br />
                </div>
               
                <div className="text-left pl-5 pt-4">
                  <button className="sign-up" onClick={this.LoginSubmit} >
                    Login &#x2794;
                  </button>
                </div>
                <div className=" text-left pt-4 pl-5" >
                    <Link to="/Register" >Register Now!</Link>
                </div>
                <div className="align-content-center pt-3 ">
                  <div className="d-flex justify-content-center">
                    <div className="p-2 m-2 border rounded-circle">
                      <Link>
                        <img src={Google} alt="Google" width="30px" />
                      </Link>
                    </div>
                    <div className="p-2 m-2 border rounded-circle">
                      <Link>
                        <img src={Printest} alt="Printest" width="30px" />
                      </Link>
                    </div>
                    <div className="p-2 m-2 border rounded-circle">
                      <Link>
                        <img src={Facebook} alt="Facebook" width="30px" />
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
