import React from 'react';

const nuggets = "images/nuggets_round.webp";
const pancakes = "images/pancakes_round.webp";

export default class Pancakes extends React.Component {

    render() {
        return (
            <div className="others">
                <div className="pancakes_wrapper">
                    <div className="pancakesImage_wrapper">
                        <img className="pancakesImage" src= {pancakes}/>
                    </div>
                    <div className="pancakesTitle">AMERIKIETIŠKI BLYNELIAI - 3.50€</div>
                    <div className="pancakesText">
                        <div className="pancakesText_line">+ klevų sirupas</div>
                        <div className="pancakesText_spacer"/>
                        <div className="pancakesText_line">+ miško uogų sirupas</div>
                        <div className="pancakesText_spacer"/>
                        <div className="pancakesText_line">+ šokoladiniu užpilas</div>
                    </div>
                </div>
                <div className="othersSplitter"div/>
                <div className="nugget_wrapper">
                    <div className="nuggetTitle">TRAŠKI VIŠTIENA IR BULVYTĖS FRI</div>
                    <div className="nuggetImage_wrapper">
                        <img className="nuggetImage" src= {nuggets}/>
                    </div>
                    <div className="nuggetText">
                        <div className="nuggetText_line">Traški vištienos filė su bulvytėmis fri(200g + 200g) - 5.00€</div>
                        <div className="nuggetText_spacer"/>
                        <div className="nuggetText_line">Traški vištienos filė su bulvytėmis fri(150g + 150g) - 4.20€</div>
                        <div className="nuggetText_spacer"/>
                        <div className="nuggetText_line">Bulvytės fri(250g) - 2.20€</div>
                    </div>
                </div>
            </div>
        );
    }
}
