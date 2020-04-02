import React from 'react';
import Drinks from "./Drinks.jsx"

const Tea = "images/arbata.png";
const ColdDrinks = "images/gaivieji gerimai.png";

export default class IngredientsAndDrinks extends React.Component {

    render() {
        return (
            <div className="ingredientsAndDrinks">
                <div className="ingredientsAndDrinks__extra">
                    <h3 className="ingredientsAndDrinks__extraTitle">PAPILDOMI INGREDIENTAI</h3>
                    <div className="ingredientsAndDrinks__extraS">
                        <div className="smallText">
                            <p className="smallText__name">Daržoves</p>
                            <p className="smallText__price">1€</p>
                        </div>
                        <div className="smallText">
                            <p className="smallText__name">Mėsos gaminiai, rūkyta lašiša, jūros gėrybės, sūris</p>
                            <p className="smallText__price">2€</p>
                        </div>
                        <div className="smallText">
                            <p className="smallText__name">Padažai</p>
                            <p className="smallText__price">1€</p>
                        </div>
                    </div>   
                </div>
                <div className="ingredientsAndDrinks__spacer"/>
                <div className="drinkChoices">
                    <Drinks className="coldDrinks" src={ColdDrinks} title="GAIVIEJI GĖRIMAI" priceLarge="1,70€" priceSmall="1,10€"/>
                    <Drinks className="coldDrinks" src={Tea} title="ŠALTA ARBATA" priceLarge="1,80€" priceSmall="1,30€"/>
                </div>
            </div>
        );
    }
}



