import React, { useRef } from 'react';
import PizzaList from "../components/PizzaList"
import Header from '../components/Header';
import PizzaRolls from '../components/PizzaRolls';
import IngredientsAndDrinks from "../components/IngredientsAndDrinks"
import Footer from '../components/Footer';
import Sandwiches from '../components/Sandwiches';
import Pancakes from '../components/Pancakes';
import Extras from '../components/Extras';


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
                <Header refs = {[{reff : this.pizzaref},{reff : this.otherref},{reff : this.drinksref}]} refNames = {["PICOS", "KITI PATIEKALAI", "GĖRIMAI"]} />
                <div className="app__backgroudImage" />
                <div className="app__blob app__blob--white">
                    <div className="app__elementWrapper">
                        <div className="app__logoImage" />
                    </div>
                    <div className="app__elementWrapper" ref={this.pizzaref}>
                        <PizzaList />
                    </div>
                    <div className="app__elementWrapper" ref={this.otherref}>
                        <PizzaRolls />
                    </div>
                    <div className="app__elementWrapper">
                        <Sandwiches />
                    </div>
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