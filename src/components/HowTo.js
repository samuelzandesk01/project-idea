import React, { Component } from "react";

import illustration from '../assets/img/illustration-8.png'

export class HowTo extends Component {
  render() {
    return (
      <div>
        <section className="container mt-5 my-pt">
          <div className="row">
            <div className="col-lg-6 mt-5 col-xl-6 col-md-12 col-sm-12 col-xs-12">
              <div className="text-left">
                <h2>How to use Exam Board</h2>
                <p className="my-p">
                  We discover our solution shouldn't be difficult to use by the
                  students so we decieded to make it user friendly and for
                  everyone finding it navigatble.
                </p>
                <div className="d-flex">
                  <div className="step">
                    <p>
                      <i className="fa fa-check"></i>Create an Account
                    </p>
                  </div>
                  <div className="step pl-5">
                    <p>
                      <i className="fa fa-check"></i>Sign in Your Account
                    </p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="step">
                    <p>
                      <i className="fa fa-check"></i>Confirm Account
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6 col-md-12 col-sm-12 col-xs-12">
              <div className="text-left">
                <img
                  src={illustration}
                  className="img-fluid pt-3"
                  width="100%"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HowTo;
