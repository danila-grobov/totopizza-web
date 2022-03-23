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
                        <RollInfo className="coldDrinks" title="SULTYS" content="0.25L" extraPrice={true} price="€1,40" boldTitle={true}/>
                        <RollInfo className="coldDrinks" title="NEALKOHOLINIS ALUS"  extraPrice={true} price="€1,40" boldTitle={true}/>
                    </div>
                    <div>
                        <ContentSpacerPrice className="coldDrinks" title="KAVA" boldTitle={true}/>
                        <div className="coldDrinks_kava">
                            <ContentSpacerPrice className="coldDrinks" content="LATTE" extraPriceSmall={true} price="€2,00"/>
                            <ContentSpacerPrice className="coldDrinks" content="CAPPUCINO" extraPriceSmall={true} price="€2,00"/>
                            <ContentSpacerPrice className="coldDrinks" content="ESPRESSO" extraPriceSmall={true} price="€1,50"/>
                            <ContentSpacerPrice className="coldDrinks" content="JUODA" extraPriceSmall={true} price="€1,70"/>
                            <ContentSpacerPrice className="coldDrinks" content="AMERICANO" extraPriceSmall={true} price="€1,70"/>    
                        </div> 
                    </div>
                    <Drinks className="coldDrinks" src={ColdDrinks} title="GAIVIEJI GĖRIMAI" priceLarge="1,90€" priceMedium="1.40€" priceSmall="1,10€"/>
                    <Drinks className="coldDrinks" src={Tea} title="ŠALTA ARBATA" priceLarge="2,00€" priceMedium="1.50€" priceSmall="N/A"/>
                </div>
            </div>
        );
    }
}



