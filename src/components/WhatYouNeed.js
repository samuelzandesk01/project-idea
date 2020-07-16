import React, { Component } from 'react'
import ProductOne from '../assets/img/product/product-1.png'
import ProductTwo from '../assets/img/product/product-2.png'
import ProductThree from '../assets/img/product/product-3.png'
import ProductFour from '../assets/img/product/product-4.png'
import ProductFive from '../assets/img/product/product-5.png'
import ProductSix from '../assets/img/product/product-6.png'
export class WhatYouNeed extends Component {
    render() {
        return (
            <div>
                               <section className="container my-pt">
                   <div className="text-center">
                        <h2>What you need</h2>
                   </div>
                    <div className="row pt-5" >
                        <div className="col-lg-2">
                            <div className="img-fluid">
                                <img src={ProductOne}   className="product-img" alt="" width="100%" />
                                <h5>Home Base</h5>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="img-fluid">
                                <img src={ProductTwo}   className="product-img" alt="" width="100%" />
                                <h5>Home Controller</h5>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="img-fluid">
                                <img src={ProductThree}  className="product-img"  alt="" width="100%" />
                                <h5>Ear Plugs</h5>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="img-fluid">
                                <img src={ProductFour}   className="product-img" alt="" width="100%" />
                                <h5>Andriod Phone</h5>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="img-fluid">
                                <img src={ProductFive}  className="product-img"  alt="" width="100%" />
                                <h5>Iphone</h5>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="img-fluid">
                                <img src={ProductSix}  className="product-img"  alt="" width="100%" />
                                <h5>Head Phone</h5>
                            </div>
                        </div>
                    </div>
               </section>
            </div>
        )
    }
}

export default WhatYouNeed
