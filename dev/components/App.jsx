import React from 'react';
import "../styles/App.css";
import logo from "../images/logo.png";
import Header from './Header';
import PizzaRolls from './PizzaRolls';

export default class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app__backgroudImage">
                    <div className="app__whiteBlob">
                        <img src={logo} alt="Toto Pizza" className="app__logoImage"/>
                        <PizzaRolls />
                    </div>
                </div>
            </div>
           
        );
    }
}
