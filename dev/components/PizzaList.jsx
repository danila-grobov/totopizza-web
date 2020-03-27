import React from 'react';
import "../styles/PizzaList.css";
import Pizza from "./Pizza.jsx"


export default class PizzaList extends React.Component {

    render() {
        return (
            <div className="pizzaList">
                <Pizza src="../images/suLasisa.png" title="Su Lasisa" ingredients="grietinės padažas, sūris, šoninė, pievagrybiai, svogūnai" priceLarge="6,89€" priceSmall="4,89€"/>
                <Pizza src="../images/suSaliami.png" title="Su Saliami" ingredients="grietinės padažas, sūris, šoninė, pievagrybiai, svogūnai" priceLarge="6,89€" priceSmall="4,89€"/>
            </div>
        );
    }
}