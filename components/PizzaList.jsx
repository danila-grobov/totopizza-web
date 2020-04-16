import React from 'react';
import Pizza from "./Pizza.jsx";
import pizzas from "../data/pizzas";
export default class PizzaList extends React.Component {
    render() {
        const { getMenuStatus, openMenu } = this.props;
        if (!getMenuStatus()) {
            return (
                <div className="pizzaList">
                    {pizzas}
                    <div className="pizzaList__button" onClick={() => openMenu()}>
                        <img src="images/expand.svg" className="pizzaList__buttonIcon" />
                        <span className="pizzaList_buttonText">
                            Daugiau picų
                        </span>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="pizzaList__whiteBg">
                    <div className="pizzaList pizzaList--expanded">
                        {pizzas}
                    </div>
                </div> 
            )
        }

    }
}