import React, { Component } from 'react';
import Header from '../components/Header';
import Payment from '../components/Payment';
import PhoneInfo from '../components/PhoneInfo';
class uzsakymas extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app__backgroudImage" />
                <div className="app__blob app__blob--granite">
                    <div className="orderInfo">
                        <div className="orderInfo__car">
                            <img src="images/Tacka.png" className="orderInfo__carImage"/>
                        </div>
                        <Payment />
                        <PhoneInfo />
                        <span className="orderInfo__address">
                            Adresas: Tilžės g. 5, Šilutė
                        </span>
                        <div className="socialInfo">
                            <span className="socialInfo__text">
                                www.instagram.com/totopizza.lt
                            </span>
                            <div className="socialInfo__spacer" />
                            <span className="socialInfo__text">
                                www.fb.com/totopizza.lt
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default uzsakymas;