import React, { Component } from 'react';
class Header extends Component {
    
    render() {
        const { refs, refNames } = this.props;
        return (
            <div className="header">
                <div className = "headerBackground">
                    <div className="header__wrapper">
                        <img src="images/logo.svg" className="header__logoButton" onClick={() => { window.location.replace("/") }} />
                        <a href="/" className="header__link">Pagrindinis</a>
                        <a href="/uzsakymas" className="header__link header__link--highlighted">Užsisakyk</a>
                    </div>
                </div>
                <div className = "header__nav">
                    <div className = "header__nav__wrapper">
                        {refs.map((value, index)=>{
                            return <button onClick = {() => value.reff.current.scrollIntoView()} key={index} className = "header__nav__button">{refNames[index]}</button>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;