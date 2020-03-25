import React from 'react';
import "../styles/App.css";
import image from "../images/pizzaBackground.png" 

export default class App extends React.Component {
    render() {
        return (
            <div className="app"> 
                <img className="app__backgroudImage" src={image}/>
                <div className="app__whiteBlob"></div>
            </div>
           
        );
    }
}
