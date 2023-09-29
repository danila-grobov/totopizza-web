import React, { Component } from 'react';
import RollInfoTable from './RollInfoTable';
import RollInfo from './RollInfo';
class PizzaRolls extends Component {
    render() {
        return (
            <div className="pizzaRolls">
                <span className="pizzaRolls__title-mobile">PICŲ SUKTINUKAI</span>
                <div className="pizzaRolls__preview">
                    <img src="images/suktinukai.webp" className="pizzaRolls__rollImg" />
                </div>
                <div className="pizzaRolls__Info">
                    <span className="pizzaRolls__title-pc">PICŲ SUKTINUKAI</span>
                    <RollInfoTable />
                    <div className="pizzaRolls__komplektas">
                        <span className="pizzaRolls__title-komp pizzaRolls__title-pc--space-after">KOMPLEKTAS 7.40€</span>
                        <RollInfo
                            title="SUKTINUKAI + GĖRIMAS"
                            content="(0,5l Cola/Fanta/Sprite/Arbata)"
                            extraPrice={false}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default PizzaRolls;