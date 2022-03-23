import React, { Component } from 'react';
class RollInfo extends Component {
    static defaultProps = {
        extraPriceSmall: false,
        extraPrice: false,
        boldTitle: false
        
    }
    render() {
        const { title, content, extraPrice, price, extraPriceSmall, boldTitle} = this.props;
        return (
            <div className= "rollInfo">
                <span className={boldTitle ? "rollInfo__titleBold" : "rollInfo__title"}>{title}</span>
                <div className={extraPrice ? "rollInfo__spacer" : "rollInfo__noExtra"} ></div>
                <span className={extraPrice ? "rollInfo__price" : "rollInfo__noExtra"} >{price}</span>
                <span className={extraPriceSmall ? "rollInfo__contentSmall" :"rollInfo__content"}>{content}</span>
                <div className={extraPriceSmall ? "rollInfo__contentSpacer" : "rollInfo__contentNoExtra"} ></div>
                <span className={extraPriceSmall ? "rollInfo__contentPrice" : "rollInfo__contentNoExtra"} >{price}</span>
            </div>
        )
    }
}


export default RollInfo;