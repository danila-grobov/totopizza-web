import React, { Component } from 'react';
import RollInfo from './RollInfo';
import ContentSpacerPrice from "./ContentSpacerPrice.jsx";

class Extras extends Component {
    render() {
        return (
            <div className="extras">
                <div className="extras__grouping1">
                    <span className="extras__title">GRUZDINTI KOLDŪNAI - €5.00</span>
                    <div className="extras__table">
                    </div>
                </div>
                <div className="extras__grouping2">
                    <span className="extras__title">BULVYTĖS CHIPS - €5,95</span>
                    <div className="extras__table">
                        <div className="extras__">
                            <ContentSpacerPrice className="extrasContent" content="- su Šonine" />   
                            <div className="extras__spacer" />
                            <ContentSpacerPrice className="extrasContent" content="- su Saliami" />   
                            <div className="extras__spacer" />
                            <ContentSpacerPrice className="extrasContent" content="- su Vištiena" />   
                            <div className="RollInfoTable__vSpacer" />
                        </div>
                    </div>
                </div>
                <div className="extras__grouping3">
                    <span className="extras__title">KITA</span>
                    <div className="extras__table">
                        <ContentSpacerPrice className="extrasContent" content="BULVYTĖS FRI" extraPriceSmall={true} price="€2.65"/>
                        <div className="extras__spacer" />
                        <ContentSpacerPrice className="extrasContent" content="MOZZARELLA SŪRIO LAZDELĖS" extraPriceSmall={true} price="€4.65"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Extras;