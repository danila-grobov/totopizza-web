import SandwichInfo from "./SandwichInfo"
import React from "react"



export default () => {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    return (
        <React.Fragment>
            <div className="sandwiches">
                <span className="sandwiches__title">PICŲ SUMUŠTINIAI 5,40€<br /></span>
                <div className="sandwiches__bg" />
                <div className="app__elementWrapper sandwiches__wrapper">
                    <SandwichInfo src="images/sandwich_vistiena.webp"
                        title="SU VIŠTIENA"
                        desc="32cm picos padas, sūris, vištiena, švelnus padažas, salotos, pomidorai" 
                        id={0}/>
                    <div className="sandwiches__spacer"/>
                    <SandwichInfo src="images/sandwich_kumpis.webp"
                        title="SU KUMPIU"
                        desc="32cm picos padas, sūris, kiaulienos kumpis, česnakinis padažas, salotos, šviežia paprika"
                        id={1}/>
                    <div className="sandwiches__spacer"/>
                    <SandwichInfo src="images/sandwich_sonine.webp"
                        title="SU ŠONINE"
                        desc="32cm picos padas, sūris, k/r šoninė, BBQ padažas, salotos, svogūnai"
                        id={2}/>
                    <div className="sandwiches__spacer"/>
                    <SandwichInfo src="images/sandwich_vegetariskas.webp"
                        title="VEGETARIŠKAS"
                        desc="32cm picos padas, sūris, pomidorai, česnakinis padažas, salotos, šviežia paprika"
                        id={3}/>
                </div>
            </div>
        </React.Fragment>

    )
}