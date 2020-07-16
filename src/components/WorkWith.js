import React, { Component } from 'react'

export class WorkWith extends Component {

    state = {
        workEx: 'Amazing template! All-in-one, clean code, beautiful design, and really not hard to work with.Highly recommended for any kind on website.'
    }

    render() {
        return (
            <div>
                <div className="container my-pt" >
                    <div className='row'>
                        <div className="col-lg-12" >
                            <div className="text-center mb-5" >
                                <h4>We have worked with <span> 12% </span> Contries accross the world.</h4>
                                <p></p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="text-left" >
                                <div className="card">
                                    <img src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/img-6-800x600.jpg" alt="" width="100%" />
                                    <div className="p-3">
                                    <i><p>{this.state.workEx}</p></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-left" >
                                <div className="card">
                                    <img src="https://preview.webpixels.io/purpose-website-ui-kit/assets/img/theme/light/img-7-800x600.jpg" alt="" width="100%" />
                                    <div className="p-3">
                                        <i><p>{this.state.workEx}</p></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkWith
