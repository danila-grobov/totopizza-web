import React from 'react';

export default class App extends React.Component {
    render() {
        const { src, title, ingredients, priceSmall, priceLarge, spiceLvl, vegie , naujiena} = this.props;
        let modifiers = [];
        let imageMods = [];
        if (spiceLvl == 1) {
            modifiers = [ ...modifiers,
                <img src="images/hot.svg" alt="aštru" className="pizza__modifierIcon" />,
                <img src="images/hot_empty.svg" alt="aštru tuščia" className="pizza__modifierIcon" />
            ]
        }
        if (spiceLvl == 2) {
            modifiers = [ ...modifiers,
                <img src="images/hot.svg" alt="aštru" className="pizza__modifierIcon" />,
                <img src="images/hot.svg" alt="aštru" className="pizza__modifierIcon" />
            ]
        }
        if (vegie) {
            modifiers = [ ...modifiers,
                <img src="images/vegie.svg" alt="vege" className="pizza__modifierIcon" />
            ]
        }
        if(naujiena){
            imageMods = [ ...imageMods,
                <img src="images/naujiena.png" alt="naujiena" className="pizza__imageModIcon" />
            ]
        }

        return (
            <div className="pizza">
                <div className="pizza__imageBlob">
                    <div className="pizza__imageModifiers">
                        {imageMods}
                    </div>
                    <img className="pizza__image" src={src} />
                </div>
                <div className="pizza__info">
                    <span className="pizza__infoTitle">{title}</span>
                    <span className="pizza__infoIngredients">{ingredients}</span>
                    <div className="pizza__modifiers">
                        {modifiers}
                    </div>
                </div>
                <div className="pizza__orderDetails">
                    <div className="pizza__small">
                        <span className="pizza__smallSize">32cm</span>
                        <span className="pizza__smallPrice">{priceSmall}</span>
                    </div>
                    <div className="pizza__spacer" />
                    <div className="pizza__large">
                        <span className="pizza__largeSize">42cm</span>
                        <span className="pizza__largePrice">{priceLarge}</span>
                    </div>
                </div>
            </div>
        );
    }
}