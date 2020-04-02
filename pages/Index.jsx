import React from 'react';
import PizzaList from "../components/PizzaList"
import Header from '../components/Header';
import PizzaRolls from '../components/PizzaRolls';

export default class Index extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <div className="app__backgroudImage" />
                <div className="app__blob app__blob--white">
                <img src="images/logo.png" alt="Toto Pizza" className="app__logoImage"/>
                    <PizzaList />
                    <PizzaRolls />
                </div>
            </div>
        );
    }
}
