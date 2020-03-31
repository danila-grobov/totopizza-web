import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="header">
                    <div className="header__wrapper">
                        <img src="images/toto_logo.png" className="header__logoButton"/>
                        <a href="/" className="header__link">Pagrindinis</a>
                        <a href="/" className="header__link header__link--highlighted">Užsisakyk</a>
                    </div>
            </div>
        );
    }
}
export default Header;