import React, { Component } from 'react'
import NewsLetter from './NewsLetter'
export class Quote extends Component {
    state={
        quotes: '_ By Robert Byson',
        cardTitleOne: 'React Strings',
        cardTitleTwo: '',
        cardTitleThree: '',
        cardItemOne: 'With you get components and examples, including tons of variables that will help you customize this theme with ease.',
        cardItemTwo: 'With you get components and examples, including tons of variables that will help you customize this theme with ease.',
        cardItemThree: 'With you get components and examples, including tons of variables that will help you customize this theme with ease.'

    }

    render() {
        return (
            <div className="container">
                 <div className="row pt-5 my-5">
                        <div className="col-lg-12 tran" >
                                <div className="text-center pl-4 w-100" >
                                    <h3 className="quote"> <i className="fas fa-quote-left"></i> </h3>
                                    <h3>{this.state.cardTitleOne}</h3>
                                    <p>{this.state.cardItemTwo} {this.state.cardItemTwo}</p>
                                    <p>{this.state.quotes}</p>
                                    <div className="line"></div>

                            </div>
                        </div>
                    </div>
                    <NewsLetter />
            </div>
        )
    }
}

export default Quote
