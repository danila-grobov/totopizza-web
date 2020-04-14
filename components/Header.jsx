import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__wrapper">
                    <img src="images/toto_logo.png" className="header__logoButton" />
                    <a href="/" className="header__link">Pagrindinis</a>
                    <a href="/" className="header__link header__link--highlighted">Užsisakyk</a>
                </div>
                <div className="menuHeader">
                    <span className="menuHeader__title">Menu</span>
                    <img src="images/close.svg" className="menuHeader__close" />
                </div>
            </div>
        );
    }
}
export default Header;