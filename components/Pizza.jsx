import React, {useEffect} from 'react';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          possTooltip: true
        };
      }
    onHowerIn = (event) => {
        if(event.target.getBoundingClientRect().top < window.innerHeight/2){ this.setState({ possTooltip: true});}
        else{ this.setState({ possTooltip: false});}
    }
    render() {
        const { src, title, ingredients, priceSmall, priceLarge, spiceLvl, vegie , naujiena, nauja} = this.props;
        const upStyle = { top: '100%', bottom: 'unset'};
        const downStyle = { bottom: '100%', top: 'unset'};
        let modifiers = [];
        let imageMods = [];
        if (spiceLvl == 1) {
            modifiers = [ ...modifiers,
                <img src="images/hot.svg" alt="aštru" className="pizza__modifierIcon" />
            ]
        }
        if (spiceLvl == 2) {
            modifiers = [ ...modifiers,
                <img src="images/hot.svg" alt="aštru" className="pizza__modifierIcon" />,
                <img src="images/hot.svg" alt="aštru" className="pizza__modifierIcon" />
            ]
        }
        if (spiceLvl == 3) {
            modifiers = [ ...modifiers,
                <img src="images/hot.svg" alt="aštru" className="pizza__modifierIcon" />,
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
                <img src="images/naujiena.webp" alt="naujiena" className="pizza__imageModIcon" />
            ]
        }

        return (
            <div className="pizza">
                <div className="pizza__imageBlob" onMouseEnter={this.onHowerIn}>
                    <div className="pizza__imageModifiers">
                        {imageMods}
                    </div>
                    <img className={this.props.nauja? "pizza__imageNew":"pizza__image"} src={src} />
                    <span className="pizza__imageIngredients" style={this.state.possTooltip ? upStyle : downStyle}>{ingredients}</span>
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