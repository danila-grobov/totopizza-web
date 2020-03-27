import React from 'react';
import "../styles/Pizza.css";

export default class App extends React.Component {
    render() {
        return (
            <div className="pizza"> 
                <img className="pizza__image" src={this.props.src}/>
                <div className="pizza__info">
                    <h3 className="pizza__info__title">{this.props.title}</h3>
                    <p className="pizza__info__ingredients">{this.props.ingredients}</p>
                </div>
                <div className="pizza__small">
                    <p className="pizza__small__size">32cm</p>
                    <p className="pizza__small__price">{this.props.priceSmall}</p>
                </div>
                <div className="pizza__large">
                    <p className="pizza__large__size">42cm</p>
                    <p className="pizza__large__price">{this.props.priceLarge}</p>
                </div>
            </div>
        );
    }
}