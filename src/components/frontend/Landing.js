import React, { Component } from 'react'

export class Landing extends Component {
    render() {
        const Bg = {
        background: 'transparent'
        }
        return (
            <div>

    <header class="header abs-header" style={Bg}>
      <div class="container">
        <nav class="navbar">
          <a href="home-01.html" class="logo">
            <img src="images/logo.png" alt="" />
          </a>
          <a href="/" id="mobile-menu-toggler">
            <i class="ti-align-justify"></i>
          </a>
          <ul class="navbar-nav">
            <li class="has-menu-child current-menu-item">
              <a href="/">Home</a>
              <ul class="sub-menu">
                <li><a href="home-01.html">Home 01</a></li>
                <li><a href="home-02.html">Home 02</a></li>
                <li><a href="home-03.html">Home 03</a></li>
              </ul>
            </li>
            <li><a href="about.html">About</a></li>
            <li class="has-menu-child">
              <a href="/">Courses</a>
              <ul class="sub-menu">
                <li><a href="courses.html">Courses</a></li>
                <li><a href="course-details.html">Course Details</a></li>
              </ul>
            </li>
            <li class="has-menu-child">
              <a href="/">Blog</a>
              <ul class="sub-menu">
                <li><a href="blog.html">Blog</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li class="has-menu-child">
              <a href="/">Events</a>
              <ul class="sub-menu">
                <li><a href="events.html">Events</a></li>
                <li><a href="event-details.html">event Details</a></li>
              </ul>
            </li>
            <li class="has-menu-child">
              <a href="/">Pages</a>
              <ul class="sub-menu">
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="terms-condition.html">Terms & Conditions</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="signup.html">Sign up</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="login.html">Log in</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <section class="banner ban-01">
      <div class="vector-img">
        <img src="images/vector.png" alt="" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7">
            <div class="banner-content">
              <h2><span>Educate!</span> Smart is Great</h2>
              <p>Can'their wherein own upon female without saying made in second the male Own you. Him fill good seasons hath</p>
              <a href="/" class="btn btn-default">Become a tutor</a>
            </div>
          </div>
        </div>
      </div>
    </section>
            </div>
        )
    }
}

export default Landing
