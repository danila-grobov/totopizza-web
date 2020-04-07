import React from 'react';

export default class App extends React.Component {
    render() {
        const {src, title, ingredients, expensive} = this.props;
        const expensive_large = 7.49;
        const expensive_small = 5.49;
        const cheap_large = 6.89;
        const cheap_small = 4.89;
        return (
            <div className="pizza"> 
                <div className="pizza__imageBlob">
                    <img className="pizza__image" src={src}/>
                </div>   
                <div className="pizza__info">
                    <h3 className="pizza__infoTitle">{title}</h3>
                    <p className="pizza__infoIngredients">{ingredients}</p>
                </div>
                <div className="pizza__small">
                    <p className="pizza__smallSize">32cm</p>
                    
                    <p className="pizza__smallPrice">{expensive ? expensive_small : cheap_small}</p>
                </div>
                <div className="pizza__spacer"/>
                <div className="pizza__large">
                    <p className="pizza__largeSize">42cm</p>
                    <p className="pizza__largePrice">{expensive ? expensive_large : cheap_large}</p>
                </div>
            </div>
        );
    }
}