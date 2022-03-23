import React, { Component } from 'react';
class ContentSpacerPrice extends Component {
    static defaultProps = {
        extraPriceSmall: false,
        extraPrice: false,
        boldTitle: false
        
    }
    render() {
        const { title, content, price, extraPrice, boldTitle, extraPriceSmall} = this.props;
        return (
            <div className= "template">
                <span className={boldTitle ? "template__titleBold" : "template__title"}>{title}</span>
                <div className={extraPrice ? "template__spacer" : "template__noExtra"} ></div>
                <span className={extraPrice ? "template__price" : "template__noExtra"} >{price}</span>
                <span className={extraPriceSmall ? "template__contentSmall" :"template__content"}>{content}</span>
                <div className={extraPriceSmall ? "template__contentSpacer" : "template__noExtra"} ></div>
                <span className={extraPriceSmall ? "template__contentPrice" : "template__noExtra"} >{price}</span>
            </div>
        )
    }
}


export default ContentSpacerPrice;