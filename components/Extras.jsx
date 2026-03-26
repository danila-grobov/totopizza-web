import React, { Component } from 'react';
import RollInfo from './RollInfo';
import ContentSpacerPrice from "./ContentSpacerPrice.jsx";

class Extras extends Component {
    render() {
        return (
            <div className="extras">
                <div className="extras__grouping1">
                    <span className="extras__title">GRUZDINTI KOLDŪNAI - €6.00</span>
                    <div className="extras__table"></div>
                    <span className="extras__title">BBQ ŠONKAULIUKAI - €12.95</span>
                    <div className="extras__table">
                        <div className="extras__">
                            <ContentSpacerPrice className="extrasContent" content='Picos paplotėlis'  />   
                            <div className="extras__spacer" />
                            <ContentSpacerPrice className="extrasContent" content='Bulvytės "CHIPS"' />   
                            <div className="extras__spacer" />
                            <ContentSpacerPrice className="extrasContent" content='Bulvytės "FRI"' />   
                            <div className="extras__spacer" />
                            <ContentSpacerPrice className="extrasContent" content='Papildomai' />
                            <ContentSpacerPrice className="extrasContent" content='+ Marinuoti agurkėliai - 0,50€' />
                            <ContentSpacerPrice className="extrasContent" content='+ Vyšniniai pomidorai - 0,50€' />
                            <div className="RollInfoTable__vSpacer" />
                        </div>
                    </div>
                </div>
                <div className="extras__grouping2">
                    <span className="extras__title">BULVYTĖS CHIPS - €6,95</span>
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
                        <ContentSpacerPrice className="extrasContent" content="BULVYTĖS FRI" extraPriceSmall={true} price="€3.50"/>
                        <div className="extras__spacer" />
                        <ContentSpacerPrice className="extrasContent" content="MOZZARELLA SŪRIO LAZDELĖS" extraPriceSmall={true} price="€5.50"/>
                    </div>
                </div>

            </div>
        );
    }
}

export default Extras;