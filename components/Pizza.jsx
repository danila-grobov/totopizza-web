import React from 'react';

export default class App extends React.Component {
    render() {
        return (
            <div className="pizza"> 
                <div className="pizza__imageBlob">
                    <img className="pizza__image" src={this.props.src}/>
                </div>   
                <div className="pizza__info">
                    <h3 className="pizza__infoTitle">{this.props.title}</h3>
                    <p className="pizza__infoIngredients">{this.props.ingredients}</p>
                </div>
                <div className="pizza__orderDetails">
                    <div className="pizza__small">
                        <p className="pizza__smallSize">32cm</p>
                        <p className="pizza__smallPrice">{this.props.priceSmall}</p>
                    </div>
                    <div className="pizza__spacer"/>
                    <div className="pizza__large">
                        <p className="pizza__largeSize">42cm</p>
                        <p className="pizza__largePrice">{this.props.priceLarge}</p>
                    </div>
                </div>
            </div>
        );
    }
}