import React, { Component } from "react";

import trust from "../assets/img/trust.png";

export class ClientCounter extends Component {

    state = {
        minsec: 0,
        sec: 0,
        minute: 0,
        hour:0,
        trustedText: "We are fully trusted and supportize to all users.",

    }

    sec(){
        this.setState({
            minsec: this.state.minsec + 1,
            sec: this.state.minsec + 1,
            minute: this.state.minute + 1,
            hour: this.state.hour + 1
        })
    }
    minsec(){
        this.setState({
            minsec: this.state.minsec + 1,
        })
    }

    minute(){
        this.setState({
            minute: this.state.minute + 1,
        })
    }

    hour(){
        this.setState({
            hour: this.state.hour + 1
        })
    }

    componentDidMount(){
        this.interval = setInterval(() => this.minsec(), 1000);
        this.interval = setInterval(() => this.sec(), 100000);
        this.interval = setInterval(() => this.minute(), 1000000);
        this.interval = setInterval(() => this.hour(), 10000000);    
    }


  render() {
      const Color = {
          color: "black",
          paddingTop: "40px"
      }
    return (
      <div>
        <section class="trusted my-pt">
          <div class="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="img-responsive pr-3 pt-5 img-fluid">
                  <img src={trust} alt="Trusted" width="100%" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="text-left ">
                  <h2 className="pl-4">Trusted CLients</h2>
                    <p className="pl-4">{this.state.trustedText}</p>
                  <div className="d-flex">
                      <div className="counter  shadow text-center text-white">
                        <h3 style={Color}>{this.state.minsec} K</h3>
                      </div>
                      <div className="counter shadow text-center text-white">
                        <h3 style={Color}>{this.state.sec} K</h3>
                      </div>
                  </div>
                  <div className="d-flex">
                      <div className="counter shadow text-center text-white">
                        <h3 style={Color}>{this.state.minute} K</h3>
                      </div>
                      <div className="counter shadow text-center text-white">
                      <h3 style={Color}>{this.state.hour} K</h3>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ClientCounter;
