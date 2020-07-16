import React from "react";

class StressReduction extends React.Component {
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
      <div className=" my-pt">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="text-left">
                <div className=" text-center pt-3 path-icon shadow">
                  <svg
                    width="2em"
                    height="2em"
                    viewBox="0 0 16 16"
                    class="bi bi-person-lines-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </div>
                <h4 className="mt-5 mb-4">{this.state.cardTitleOne}</h4>
                <p>{this.state.cardItemOne}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-left">
                <div className="text-center  pt-3 path-icon shadow">
                  <svg
                    width="2em"
                    height="2em"
                    viewBox="0 0 16 16"
                    class="bi bi-person-lines-fill"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </div>
                <h4 className="mt-5 mb-4">{this.state.cardTitleOne}</h4>
                <p>{this.state.cardItemOne}</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className=" text-center pt-3 path-icon shadow">
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="bi bi-person-lines-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </div>{" "}
              <div className="text-left">
                <h4 className="mt-5 mb-4">{this.state.cardTitleThree}</h4>
                <p>{this.state.cardItemOne}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StressReduction;
