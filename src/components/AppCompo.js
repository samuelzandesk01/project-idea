import React, { Component } from "react";

export class AppCompo extends Component {
  render() {
    return (
      <div>
        <section className="app-section">
          <div className="app-con"></div>
          <div className="container">
            <div className="text-right mt-5">
              <h2 className="our-app">Our Mobile App</h2>
              <p className="text-white">
                This is one of out fetures of making examination writting <br />
                ease all over the world.
              </p>

              <div className="path ml-auto"></div>
              <br />
              <button className="download mr-3">
                <i className="fa fa-play"></i> Download for Play Store
              </button>
              <button className="download">
                <i className="fa fa-apple"></i> Download for IOS
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AppCompo;
