import React, { Component } from 'react';
import Contacts from './Contacts';
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__contacts">
                    <Contacts icon="images/phone.svg" text="+370 639 99399" link="tel:+37063999399"/>
                    <Contacts icon="images/place.svg" text="Tilžės g. 5, Šilutė 99142" link="https://g.page/totopizza-lt?share" newTab={true}/>
                    <Contacts icon="images/email.svg" text="plarpalas@gmail.com" link="mailto:plarpalas@gmail.com" newTab={true}/>
                </div>
                <div className="orderButton">
                    <span className="orderButton__text" onClick={() => { window.location.replace("/uzsakymas") }}>
                        UŽSISAKYK
                    </span>
                </div>
                <div className="socialMedia">
                    <img src="images/fb.svg" className="socialMedia__button"  onClick={() => { window.open("https://fb.com/totopizza.lt") }}/>
                    <img src="images/insta.svg" className="socialMedia__button"  onClick={() => { window.open("https://instagram.com/totopizza.lt") }}/>
                </div>

            </div>
        );
    }
}

export default Footer;