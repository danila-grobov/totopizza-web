import SandwichInfo from "./SandwichInfo"
import React from "react"



export default () => {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    return (
        <React.Fragment>
            <div className="sandwiches">
                <span className="sandwiches__title">PICŲ SUMUŠTINIAI {(month >= 4 && month <= 9)?"4,50€":"(gaminami balandžio - rugsėjo mėn)"}<br /></span>
                <div className="sandwiches__bg" />
                <div className="app__elementWrapper sandwiches__wrapper">
                    <SandwichInfo src="images/sandwich_vistiena.png"
                        title="SU VIŠTIENA"
                        desc="32cm picos padas, sūris, vištiena, švelnus padažas, salotos, pomidorai" 
                        id={0}/>
                    <div className="sandwiches__spacer"/>
                    <SandwichInfo src="images/sandwich_kumpis.png"
                        title="SU KUMPIU"
                        desc="32cm picos padas, sūris, kiaulienos kumpis, česnakinis padažas, salotos, šviežia paprika"
                        id={1}/>
                    <div className="sandwiches__spacer"/>
                    <SandwichInfo src="images/sandwich_sonine.png"
                        title="SU ŠONINE"
                        desc="32cm picos padas, sūris, k/r šoninė, BBQ padažas, salotos, svogūnai"
                        id={2}/>
                    <div className="sandwiches__spacer"/>
                    <SandwichInfo src="images/sandwich_vegetariskas.png"
                        title="VEGETARIŠKAS"
                        desc="32cm picos padas, sūris, pomidorai, česnakinis padažas, salotos, šviežia paprika"
                        id={3}/>
                </div>
            </div>
        </React.Fragment>

    )
}