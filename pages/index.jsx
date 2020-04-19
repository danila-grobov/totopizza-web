import React from 'react';
import PizzaList from "../components/PizzaList"
import Header from '../components/Header';
import PizzaRolls from '../components/PizzaRolls';
import IngredientsAndDrinks from "../components/IngredientsAndDrinks"
import Footer from '../components/Footer';


export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = { menuOpen: false };
    }
    openMenu = () => {
        this.setState({ menuOpen: true })
    }
    closeMenu = () => {
        this.setState({ menuOpen: false })
    }
    getMenuStatus = () => {
        return this.state.menuOpen;
    }
    componentDidMount(){
        document.title = "TotoPizza | Šilutė"
    }
    render() {
        return (
            <div className={this.getMenuStatus() ? "app app--fixed" : "app"}>
                <Header getMenuStatus={this.getMenuStatus} closeMenu={this.closeMenu}/>
                <div className="app__backgroudImage" />
                <div className="app__blob app__blob--white">
                    <div className="app__elementWrapper">
                        <div className="app__logoImage" />
                        <PizzaList getMenuStatus={this.getMenuStatus} openMenu={this.openMenu}/>
                        <PizzaRolls />
                        <IngredientsAndDrinks/> 
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}