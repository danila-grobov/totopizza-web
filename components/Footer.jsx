import React, { Component } from 'react';
import Contacts from './Contacts';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__contacts">
                    <Contacts icon="images/phone.svg" text="+370 639 99399"/>
                    <Contacts icon="images/place.svg" text="Tilžės g. 5, Šilutė 99142"/>
                    <Contacts icon="images/email.svg" text="plarpalas@gmail.com"/>
                </div>
                <div className="orderButton">
                    <span className="orderButton__text">
                        UŽSISAKYK
                    </span>
                </div>
                <img src="images/fb.svg" className="socialButton"/>
                <img src="images/insta.svg" className="socialButton"/>
            </div>
        );
    }
}

export default Footer;