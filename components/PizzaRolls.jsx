import React, { Component } from 'react';
import RollInfoTable from './RollInfoTable';
import RollInfo from './RollInfo';
class PizzaRolls extends Component {
    render() {
        return (
            <div className="pizzaRolls">
                <div className="pizzaRolls__preview">
                    <img src="images/suktinukai.webp" className="pizzaRolls__rollImg" />
                </div>
                <div className="pizzaRolls__Info">
                    <span className="pizzaRolls__title">PICŲ SUKTINUKAI (2 vnt.) 4,30€</span>
                    <RollInfoTable />
                    <div className="pizzaRolls__komplektas">
                        <span className="pizzaRolls__title pizzaRolls__title--space-after">KOMPLEKTAS 5,30€</span>
                        <RollInfo
                            title="2 SUKTINUKAI + GĖRIMAS"
                            content="(0,5l Cola/Fanta/Sprite)"
                            vertical={false} />
                    </div>
                </div>
            </div>
        );
    }
}

export default PizzaRolls;