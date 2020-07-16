import React from "react";
import ShortCards from "./ShortCards";
import StressReduction from "./StressReduction";
import NewsLetter from './NewsLetter';
import Footer from './Footer';
import ClientCounter from './ClientCounter';
import HexTwo from "../assets/img/hex.png";
// import Developer from '../assets/img/developer.png'
export class ReasonWhy extends React.Component {
      constructor(props) {
        super(props)
      
        this.state = {
          nameRef: React.createRef(),
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
        }
      }
      

      // componentDidMount(){
      //   this.nameRef.current.focus()
      // }
  render() {
    return (
      <div>
        <section className="reason-why my-pt mt-5">
          <div className="anim"></div>
          <div className="anim-right"></div>
          <div className="container">
            <div className="text-center">
              <h3>Reasons why you should create account.</h3>
              <p></p>
              <form>
                <input type="email" className="input"  placeholder="Search" />
                <input type="submit" className="input-sub" />
              </form>
              <div className="ml-5">
                    <img src={HexTwo} alt=""  width="90" className="hex-two" />
                </div>
            </div>

            <ShortCards className="mt-5" />
          </div>
        </section>
        <section>
          <StressReduction />
          <div className="container mb-5 my-pt">
            <div className="w-100" >
                <div className="d-flex" >
                    <div>
                        <img src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/img-6-800x600.jpg" alt=""  className="border bg-info" width="100%" />
                    </div>
                     <div>
                        <div className="card shadow card-l p-5" >
                           <div className="text-left pl-1 ">
                                <h5 className="text-dark font-weight-bolder">Have you created an account </h5>
                                <p>{this.state.cardItemOne}</p>
                           </div>

                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <ClientCounter />
        <NewsLetter />
        <Footer />
      </div>
    );
  }
}

export default ReasonWhy;
