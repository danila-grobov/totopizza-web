import React from 'react';

export default class App extends React.Component {
    render() {
        const { src, title, ingredients, expensive, ignoreSmallPrice} = this.props;
        const expensive_large = 7.49;
        const expensive_small = 5.49;
        const cheap_large = 6.89;
        const cheap_small = 4.89;
        const notThere = "N\\A";
        const currency = "€";
        const priceSmall = (expensive ? expensive_small : cheap_small) + currency;
        return (
            <div className="pizza">
                <div className="pizza__imageBlob">
                    <img className="pizza__image" src={src} />
                </div>
                <div className="pizza__info">
                    <span className="pizza__infoTitle">{title}</span>
                    <span className="pizza__infoIngredients">{ingredients}</span>
                </div>
                <div className="pizza__orderDetails">
                    <div className="pizza__small">
                        <span className="pizza__smallSize">32cm</span>
                        <span className="pizza__smallPrice">{ignoreSmallPrice ? notThere : priceSmall}</span>
                    </div>
                    <div className="pizza__spacer" />
                    <div className="pizza__large">
                        <span className="pizza__largeSize">42cm</span>
                        <span className="pizza__largePrice">{expensive ? expensive_large : cheap_large}{currency}</span>
                    </div>
                </div>
            </div>
        );
    }
}