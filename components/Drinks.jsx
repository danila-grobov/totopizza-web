import React from 'react';

export default class Drinks extends React.Component {

    render() {
        return (
            <div className="drinks">
                <img className="drinks__image" src={this.props.src} />
                <p className="drinks__title">{this.props.title}</p>
                <div className="drinks__prices">
                    <div className="drinks__small">
                        <p className="drinks__smallSize">0.5L</p>
                        <p className="drinks__smallPrice">{this.props.priceSmall}</p>
                    </div>
                    <div className="drinks__spacer" />
                    <div className="drinks__large">
                        <p className="drinks__largeSize">1.5L</p>
                        <p className="drinks__largePrice">{this.props.priceLarge}</p>
                    </div>
                </div>
            </div>
        );
    }
}

