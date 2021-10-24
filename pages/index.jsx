import React from 'react';
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
    }
    componentDidMount() {
        document.title = "TotoPizza | Šilutė"
    }
    render() {
        return (
            <div className= "app">
                <Header />
                <div className="app__backgroudImage" />
                <div className="app__blob app__blob--white">
                    <div className="app__elementWrapper">
                        <div className="app__logoImage" />
                    </div>
                    <div className="app__elementWrapper">
                        <PizzaList />
                    </div>
                    <div className="app__elementWrapper">
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
                    <div className="app__elementWrapper">
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