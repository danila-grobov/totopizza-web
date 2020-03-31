import React, { Component } from 'react';
import RollInfo from './RollInfo';
class RollInfoTable extends Component {
    render() {
        return (
            <div className="RollInfoTable">
                <div className="RollInfoTable__hWrapper">
                    <RollInfo
                        title="SU KUMPIU"
                        content="pomidorų padažas, sūris, pievagrybiai,
                        konservuoti kukurūzai, svogūnai, švž.paprika" 
                        vertical={true}/>
                    <div className="RollInfoTable__vSpacer" />
                    <RollInfo
                        title="SU MALTA KIAULIENA"
                        content="pomidorų padažas, sūris, kiaulienos kumpis,
                        pievagrybiai, konservuoti kukurūzai"
                        vertical={true}/>
                    <div className="RollInfoTable__vSpacer" />
                    <RollInfo
                        title="SU JAUTIENA"
                        content="pomidorų padažas, sūris, rūkyta jautiena,
                        pievagrybiai, švž. paprika" 
                        vertical={true}/>
                </div>
                <div className="RollInfoTable__hSpacer" />
                <RollInfo
                    title="VEGETARISKAS"
                    content="pomidorų padažas, sūris, malta kiauliena,
                    jelapenas, BBQ padažas" 
                    vertical={false}/>
            </div>
        );
    }
}

export default RollInfoTable;