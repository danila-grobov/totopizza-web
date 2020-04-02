import React, { Component } from 'react';
import Header from '../components/Header';
class uzsakymas extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app__backgroudImage app__backgroudImage--orderPage">
                    <div className="app__blob app__blob--granite">
                        <div className="orderInfo">
                            <img src="images/Tacka.png" className="orderInfo__carImage"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default uzsakymas;