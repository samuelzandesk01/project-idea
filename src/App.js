import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./main.css";

import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Services from "./components/Services";

import ShortCards from "./components/ShortCards";
import AppCompo from "./components/AppCompo";
import HowTo from "./components/HowTo";
import ClientCounter from "./components/ClientCounter";
import StressReduction from "./components/StressReduction";
import WorkWith from "./components/WorkWith";
import ExamDate from "./components/ExamDate";
import Footer from "./components/Footer";
import Changing from "./components/Changing";
import ReasonWhy from "./components/ReasonWhy";
import Quote from "./components/Quote";
import Login from "./components/Login";
import Register from "./components/Register";
import ContactUs from "./components/ContactUs";
import Index from "./components/dashboard/Index";




export class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <Landing className="mt-5"/>
                <ShortCards />
                <AppCompo />
                <HowTo />
                <ClientCounter />
                <StressReduction />
                <Quote />
                <WorkWith />
                <ExamDate />
                <Changing />
                <Footer />
              </div>
            )}
          />

          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/ReasonWhy" component={ReasonWhy} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/dashboard/Index" component={Index} />



        </div>
      </Router>
    );
  }
}

export default App;
