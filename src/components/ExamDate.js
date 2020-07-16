import React, { Component } from 'react';
import Calendar from '../assets/img/app-3.png'

export class ExamDate extends Component {

    state = {
        examDate: `You can get updates on all exammination date`
    }

    render() {
        const Border = {
            border: '0.2px solid white',
            color: '#5b53ff',
            background: 'white'
        }
        return (
            <div className="exam-date my-mt pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-left" >
                                <h4 className="text-white exam">{this.state.examDate}</h4>
                                <div className="w-75 pt-4" >
                                <p className="text-white" >With Exam Board you get components and examples, including tons of variables that will help you customize this theme with ease.</p>
                                </div>
                                <button style={Border} className="sign-up">Start Exam</button>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={Calendar} alt="Calendar" width="100%" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExamDate
