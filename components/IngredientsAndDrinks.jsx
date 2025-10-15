import React from 'react';
import Drinks from "./Drinks.jsx";
import RollInfo from "./RollInfo.jsx";
import ContentSpacerPrice from "./ContentSpacerPrice.jsx";
const Tea = "images/arbata.webp";
const ColdDrinks = "images/gaivieji gerimai.webp";

export default class IngredientsAndDrinks extends React.Component {

    render() {
        return (
            <div className="ingredientsAndDrinks">
                <div className="drinkChoices">
                    <div>
                        <RollInfo className="coldDrinks" title="SULTYS" content="0.25L" extraPrice={true} price="€2,60" boldTitle={true}/>
                        <RollInfo className="coldDrinks" title="NEALKOHOLINIS ALUS"  extraPrice={true} price="€2,10" boldTitle={true}/>
                    </div>
                    <div>
                        <ContentSpacerPrice className="coldDrinks" title="KAVA" boldTitle={true}/>
                        <div className="coldDrinks_kava">
                            <ContentSpacerPrice className="coldDrinks" content="LATTE" extraPriceSmall={true} price="€3,20"/>
                            <ContentSpacerPrice className="coldDrinks" content="CAPPUCINO" extraPriceSmall={true} price="€3,20"/>
                            <ContentSpacerPrice className="coldDrinks" content="ESPRESSO" extraPriceSmall={true} price="€2,50"/>
                            <ContentSpacerPrice className="coldDrinks" content="JUODA" extraPriceSmall={true} price="€2,80"/>
                        </div> 
                    </div>
                    <Drinks className="coldDrinks" src={ColdDrinks} title="GAIVIEJI GĖRIMAI" priceLarge="3,10€" priceMedium="2.10€" priceSmall="1,70€"/>
                    <Drinks className="coldDrinks" src={Tea} title="ŠALTA ARBATA" priceLarge="3,10€" priceMedium="2.10€" priceSmall="N/A"/>
                </div>
            </div>
        );
    }
}



