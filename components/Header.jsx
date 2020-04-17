import React, { Component } from 'react';
class Header extends Component {
    render() {
        const { getMenuStatus, closeMenu } = this.props;
        return (
            <div className="header">
                <div className="header__wrapper">
                    <img src="images/logo.svg" className="header__logoButton" onClick={() => { window.location.replace("/") }} />
                    <a href="/" className="header__link">Pagrindinis</a>
                    <a href="/uzsakymas" className="header__link header__link--highlighted">Užsisakyk</a>
                </div>
                {
                    getMenuStatus && getMenuStatus() ?
                        <div className="menuHeader">
                            <span className="menuHeader__title">Menu</span>
                            <img src="images/close.svg" className="menuHeader__close" onClick={()=>closeMenu()} />
                        </div> : ""
                }

            </div>
        );
    }
}
export default Header;