import React, { Component } from 'react';
class RollInfo extends Component {
    render() {
        const { title, content, extraPrice, price} = this.props;
        return (
            <div className= "rollInfo">
                <span className="rollInfo__title">{title}</span>
                <div className={extraPrice ? "rollInfo__spacer" : "rollInfo__noExtra"} ></div>
                <span className={extraPrice ? "rollInfo__price" : "rollInfo__noExtra"} >{price}</span>
                <span className="rollInfo__content">{content}</span>
            </div>
        )
    }
}

export default RollInfo;