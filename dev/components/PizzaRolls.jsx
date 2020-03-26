import React, { Component } from 'react';
import roll from "../images/suktinukai.png";
import "../styles/PizzaRolls.css";
class PizzaRolls extends Component {
    render() {
        return (
            <div className="pizzaRolls">
                <div className="pizzaRolls_preview">
                    <img src={roll} className="pizzaRolls__rollImg"/>
                </div>
            </div>
        );
    }
}

export default PizzaRolls;