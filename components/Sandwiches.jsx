import SandwichInfo from "./SandwichInfo";
import React, {useState} from "react";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const SandwichData = [
   {
    sandwich : 
    <SandwichInfo src="images/sandwich_vistiena.webp"
        title="SU VIŠTIENA"
        desc="32cm picos padas, sūris, vištiena, švelnus padažas, salotos, pomidorai" 
        id={0}/>
    },{
    sandwich : 
    <SandwichInfo src="images/sandwich_kumpis.webp"
        title="SU KUMPIU"
        desc="32cm picos padas, sūris, kiaulienos kumpis, česnakinis padažas, salotos, šviežia paprika"
        id={1}/>
    },{
    sandwich :
    <SandwichInfo src="images/sandwich_sonine.webp"
        title="SU ŠONINE"
        desc="32cm picos padas, sūris, k/r šoninė, BBQ padažas, salotos, svogūnai"
        id={2}/>
    },{
    sandwich :
    <SandwichInfo src="images/sandwich_vegetariskas.webp"
        title="VEGETARIŠKAS"
        desc="32cm picos padas, sūris, pomidorai, česnakinis padažas, salotos, šviežia paprika"
        id={3}/>
    }
    
]


export default () => {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
    const [current,setCurrent] = useState(0);
    const length = SandwichData.length;
    
    const nextSandwich = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const previousSandwich = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <React.Fragment>
            <div className="sandwiches">
                <span className="sandwiches__title">PICŲ SUMUŠTINIAI 6,45€<br /></span>
                <div className="sandwiches__bg" />
                
                    <section className="slider">
                        <FaArrowAltCircleLeft className="left-arrow" onClick={previousSandwich}/>
                        <FaArrowAltCircleRight className="right-arrow" onClick={nextSandwich}/>
                        {SandwichData.map((shown, index) => {
                            return(
                                <div className={index === current ? "sandwich_active" : "sandwich"}
                                key={index}>
                                    {index === current && (
                                        shown.sandwich
                                    )}
                                </div>
                            )
                        })}
                    </section>

                    <div className="app__elementWrapper sandwiches__wrapper">
                        {SandwichData.map((shown, index) => {
                            return shown.sandwich
                        })}
                    </div>
            </div>
        </React.Fragment>

    )
}