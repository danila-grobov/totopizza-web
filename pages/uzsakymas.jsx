import React, { Component } from 'react';
import Header from '../components/Header';
import Payment from '../components/Payment';
class uzsakymas extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app__backgroudImage app__backgroudImage--orderPage">
                    <div className="app__blob app__blob--granite">
                        <div className="orderInfo">
                            <img src="images/Tacka.png" className="orderInfo__carImage"/>
                            <Payment />
                            <div className="orderInfo__spacer" />
                            <span className="orderInfo__phoneInfo">
                                UŽSAKYMŲ TELEFONAS
                            </span>
                            <span className="orderInfo__phoneInfo orderInfo__phoneInfo--bold">
                                8 639 99399
                            </span>
                            <div className="orderInfo__spacer" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default uzsakymas;