import React, { Component } from 'react';
import RollInfo from './RollInfo';
class Extras extends Component {
    render() {
        return (
            <div className="extras">
                <div className="extras__grouping1">
                    <span className="extras__title">GRUZDINTI KOLDŪNAI </span>
                    <div className="extras__table">
                        <RollInfo
                            title="GRUZDINTI KOLDŪNAI SU SŪRIU"
                            extraPrice={true}
                            content="su vištienos įdaru"
                            price="€4,20"
                            />
                        <div className="RollInfoTable__vSpacer" />
                    </div>
                </div>
                <div className="extras__grouping2">
                    <span className="extras__title">NAMŲ STILIAUS BULVYTĖS (CHIPS)</span>
                    <div className="extras__table">
                        <RollInfo
                            title="CHIPS + ŠONINĖ IR MOZZARELLA"
                            extraPrice={true}
                            price="€5,50"
                            />
                        <div className="RollInfoTable__vSpacer" />
                        <RollInfo
                            title="CHIPS + SALIAMI IR MOZZARELLA"
                            extraPrice={true}
                            price="€5,50"
                            />
                        <div className="RollInfoTable__vSpacer" />
                        <RollInfo
                            title="CHIPS + MOZZARELLA SŪRIS"
                            extraPrice={true}
                            price="€3,50"
                            />
                        <div className="RollInfoTable__vSpacer" />
                    </div>
                </div>
                <div className="extras__grouping3">
                    <span className="extras__title">KITA</span>
                    <div className="extras__table">
                        <RollInfo
                            title="BULVYTĖS FRI"
                            extraPrice={true}
                            content="250g"
                            price="€2,00"
                            />
                        <div className="RollInfoTable__vSpacer" />
                        <RollInfo
                            title="MOZZARELLA SŪRIO LAZDELĖS"
                            extraPrice={true}
                            content="10 vnt."
                            price="€4,50"
                            />
                    </div>
                </div>

            </div>
        );
    }
}

export default Extras;