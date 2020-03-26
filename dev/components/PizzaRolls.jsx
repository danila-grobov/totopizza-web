import React, { Component } from 'react';
import roll from "../images/suktinukai.png";
import "../styles/PizzaRolls.css";
class PizzaRolls extends Component {
    render() {
        return (
            <div className="pizzaRolls">
                <div className="pizzaRolls__preview">
                    <img src={roll} className="pizzaRolls__rollImg" />
                </div>
                <div className="pizzaRolls__Info">
                    <span className="pizzaRolls__title">PICŲ SUKTINUKAI (2 vnt.) 3,89€</span>
                </div>
            </div>
        );
    }
}

export default PizzaRolls;