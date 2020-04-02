import React from 'react';
import PizzaList from "../components/PizzaList"
import Header from '../components/Header';
import PizzaRolls from '../components/PizzaRolls';
import IngredientsAndDrinks from "../components/IngredientsAndDrinks"
import Footer from '../components/Footer';


export default class Index extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app__backgroudImage">
                    <div className="app__whiteBlob">
                        <img src="images/logo.png" alt="Toto Pizza" className="app__logoImage"/>
                        <PizzaList />
                        <PizzaRolls />
                        <IngredientsAndDrinks/>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}
