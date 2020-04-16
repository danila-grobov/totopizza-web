import React from 'react';
import Pizza from "./Pizza.jsx"
import pizzas from "../data/pizzas"
export default class PizzaList extends React.Component {

    render() {
        return (
            <div className="pizzaList">
                {pizzas}
                <div className="pizzaList__button">
                    <img src="images/expand.svg" className="pizzaList__buttonIcon"/>
                    <span className="pizzaList_buttonText">
                        Daugiau picų
                    </span>
                </div>
            </div>
        );
    }
}