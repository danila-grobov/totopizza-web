import React from 'react';
import Pizza from "./Pizza.jsx"

const SuLasisa = "images/SuGrybaisIrSonine.png";
const SuSaliami = "images/SuGrybaisIrSonine.png";

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