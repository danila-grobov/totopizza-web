import React from 'react';
import Pizza from "./Pizza.jsx"
import pizzas from "../data/pizzas"
export default class PizzaList extends React.Component {

    render() {
        return (
            <div className="pizzaList">
                {pizzas}
            </div>
        );
    }
}