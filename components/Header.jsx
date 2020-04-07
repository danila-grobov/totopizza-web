import React, { Component } from 'react';
class Header extends Component {
    render() {
        return (
            <div className="header">
                    <div className="header__wrapper">
                        <img src="images/logo.svg" className="header__logoButton"  onClick={() => { window.location.replace("/") }}/>
                        <a href="/" className="header__link">Pagrindinis</a>
                        <a href="/uzsakymas" className="header__link header__link--highlighted">Užsisakyk</a>
                    </div>
            </div>
        );
    }
}
export default Header;