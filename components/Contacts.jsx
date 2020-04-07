import React, { Component } from 'react';
class Contacts extends Component {
    render() {
        const {icon,text,link,newTab} = this.props;
        return (
            <div className="contacts" onClick={() => { newTab ? window.open(link) : window.location.replace(link) }}>
                <img src={icon} className="contacts__logo"/>
                <span className="contacts__text">{text}</span>
            </div>
        );
    }
}

export default Contacts;