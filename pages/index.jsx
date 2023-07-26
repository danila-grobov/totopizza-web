import React, { useRef } from 'react';
import PizzaList from "../components/PizzaList"
import Header from '../components/Header';
import PizzaRolls from '../components/PizzaRolls';
import IngredientsAndDrinks from "../components/IngredientsAndDrinks"
import Footer from '../components/Footer';
import Sandwiches from '../components/Sandwiches';
import Pancakes from '../components/Pancakes';
import Extras from '../components/Extras';
import Popup from '../components/Popup';


export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.pizzaref = React.createRef();
        this.otherref = React.createRef();
        this.drinksref = React.createRef();
    }
    componentDidMount() {
        document.title = "TotoPizza | Šilutė"
    }
    executeScroll = () => this.pizzaref.current.scrollIntoView()
    render() {
        return (
            <div className= "app">
                {/*<div className="popup-parent" >
                    <Popup trigger={false} className="popup">
                        <img src="images/closed.png" className="popup-closed-img" />
                    </Popup>
        </div>*/}
                <Header refs = {[{reff : this.pizzaref},{reff : this.otherref},{reff : this.drinksref}]} refNames = {["PICOS", "KITI PATIEKALAI", "GĖRIMAI"]} />
                <div className="app__backgroudImage" />
                <div className="app__blob app__blob--white">
                    <div className="app__elementWrapper">
                        <div className="app__logoImage" ref={this.pizzaref}/>
                    </div>
                    <div className="app__elementWrapper" >
                        <PizzaList />
                    </div>
                    <div ref={this.otherref}/>
                    <div className="app__elementWrapper" >
                        <PizzaRolls />
                    </div>
                    {/*<div className="app__elementWrapper">
                        <Sandwiches />
                    </div>*/}
                    <div className="app__elementWrapper">
                        <Pancakes/>
                    </div>
                    <div className="app__elementWrapper">
                        <Extras/>
                    </div>
                    <div className="app__elementWrapper" ref={this.drinksref}>
                        <IngredientsAndDrinks />
                    </div>
                    <div className="app__elementWrapper">
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}