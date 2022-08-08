import React, { Component } from 'react';
import RollInfoTable from './RollInfoTable';
import RollInfo from './RollInfo';
class PizzaRolls extends Component {
    render() {
        return (
            <div className="pizzaRolls">
                <span className="pizzaRolls__title-mobile">PICŲ SUKTINUKAI (2 vnt.) </span>
                <div className="pizzaRolls__preview">
                    <img src="images/suktinukai.webp" className="pizzaRolls__rollImg" />
                </div>
                <div className="pizzaRolls__Info">
                    <span className="pizzaRolls__title-pc">PICŲ SUKTINUKAI (2 vnt.) </span>
                    <RollInfoTable />
                    <div className="pizzaRolls__komplektas">
                        <span className="pizzaRolls__title-komp pizzaRolls__title-pc--space-after">KOMPLEKTAS 5,70€</span>
                        <RollInfo
                            title="2 SUKTINUKAI + GĖRIMAS"
                            content="(0,5l Cola/Fanta/Sprite)"
                            extraPrice={false}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PizzaRolls;