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
                
            </div>
        );
    }
}

export default Footer;