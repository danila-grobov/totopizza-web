import React, { Component } from 'react';
import RollInfo from './RollInfo';
class RollInfoTable extends Component {
    render() {
        return (
            <div className="RollInfoTable">
                <div className="RollInfoTable__hWrapper">
                    <RollInfo
                        title="SU KUMPIU"
                        content="pomidorų padažas, sūris, kiaulienos kumpis, pievagrybiai, konservuoti kukurūzai"
                        extraPrice={true}
                        price="€6.00"/>
                    <div className="RollInfoTable__vSpacer" />
                    <RollInfo
                        title="SU FARŠU"
                        content="pomidorų padažas, sūris, malta kiauliena, jelapenas, BBQ padažas"
                        extraPrice={true}
                        price="€6.00"/>
                    <div className="RollInfoTable__vSpacer" />
                    <RollInfo
                        title="SU JAUTIENA"
                        content="pomidorų padažas, sūris, rūkyta jautiena, pievagrybiai, švž. paprika"
                        extraPrice={true}
                        price="€6.00"/>
                    <div className="RollInfoTable__vSpacer" />
                    <RollInfo
                        title="VEGETARIŠKAS"
                        content="pomidorų padažas, sūris, pievagrybiai, konservuoti kukurūzai, svogūnai, švž.paprika"
                        extraPrice={true}
                        price="€6.00"/>
                    <div className="RollInfoTable__vSpacer" />  
                    <RollInfo
                        title="SU VIŠTIENA"
                        content="pomidorų padažas, sūris, vištiena, pievagrybiai, švž. paprika"
                        extraPrice={true}
                        price="€6.00"/>
                    <div className="RollInfoTable__vSpacer" /> 
                     <RollInfo
                        title="KEBABŲ"
                        content="pomidorų padažas, sūris, ant iešmo vištiena/vištienos jautienos mix, mėlynieji svogūnai, garstyčių padažas"
                        extraPrice={true}
                        price="€6.00"/>
                </div>
            </div>
        );
    }
}

export default RollInfoTable;