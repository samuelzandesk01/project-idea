import React, { Component } from "react";

export class HoverCard extends Component {
  state = {
    quotes: "_ By Robert Byson",
    cardTitleOne: "Easy To Use",
    cardTitleTwo: "Simple Useability",
    cardTitleThree: "Stress Reduction",
    cardItemOne:
      "With you get components and examples, including tons of variables that will help you customize this theme with ease.",
    cardItemTwo:
      "With you get components and examples, including tons of variables that will help you customize this theme with ease.",
    cardItemThree:
      "With you get components and examples, including tons of variables that will help you customize this theme with ease.",
  };

  render() {
    return (
      <div>
        <section className="card-sec my-pt">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="card-hover border pl-3 p-4 pt-5 text-left">
                    <h4>{this.state.cardTitleOne}</h4>
                    <p>{this.state.cardItemThree}</p>
                    <i>&#8594;</i>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-hover bg-dark border pl-3 p-4 pt-5 text-left">
                    <h4>{this.state.cardTitleTwo}</h4>
                    <p>{this.state.cardItemThree}</p>
                    <i>&#8594;</i>

                </div>
              </div>
              <div className="col-lg-4">
                <div className="card-hover border pl-3 p-4 pt-5 text-left">
                    <h4>{this.state.cardTitleThree}</h4>
                    <p>{this.state.cardItemThree}</p>
                    <i>&#8594;</i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HoverCard;
