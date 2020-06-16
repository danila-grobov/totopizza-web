import React from 'react';
export default props => {
    const { src, title, desc,id } = props;
    const waveposition = id * -100;
    return (
        <div className="sandwichInfo">
            <div className="sandwichInfo__titlewrapper">
                <div className="sandwichinfo__orangeBlob"/>
                <span className="sandwichInfo__title">{title}</span>
            </div>
            <span className="sandwichInfo__desc">{desc}</span>
            <div className="sandwichInfo__imgWrapper">
                <div className="sandwichInfo__wave" style={{backgroundPositionX:`calc(${waveposition}% - 4px)`}}/>
                <img src={src} alt="" className="sandwichInfo__img" />
            </div>
        </div>
    )
}