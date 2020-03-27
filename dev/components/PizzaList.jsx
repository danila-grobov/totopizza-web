import React from 'react';
import "../styles/PizzaList.css";
import Pizza from "./Pizza.jsx"
import SuLasisa from "../images/SuGrybaisIrSonine.png";
import SuSaliami from "../images/SuGrybaisIrSonine.png"


export default class PizzaList extends React.Component {

    render() {
        return (
            <div className="pizzaList">
                <Pizza src={SuLasisa} title="SU ŠONINE IR GRYBAIS" ingredients="grietinės padažas, sūris, šoninė, pievagrybiai, svogūnai" priceLarge="6,89€" priceSmall="4,89€"/>
                <Pizza src={SuSaliami} title="SU ŠONINE IR GRYBAIS" ingredients="grietinės padažas, sūris, šoninė, pievagrybiai, svogūnai" priceLarge="6,89€" priceSmall="4,89€"/>
                <Pizza src={SuLasisa} title="SU ŠONINE IR GRYBAIS" ingredients="grietinės padažas, sūris, šoninė, pievagrybiai, svogūnai" priceLarge="6,89€" priceSmall="4,89€"/>
                <Pizza src={SuSaliami} title="SU ŠONINE IR GRYBAIS" ingredients="grietinės padažas, sūris, šoninė, pievagrybiai, svogūnai" priceLarge="6,89€" priceSmall="4,89€"/>
            </div>
        );
    }
}