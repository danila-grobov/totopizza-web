import React, { Component } from 'react';
class Contacts extends Component {
    render() {
        const {icon,text} = this.props;
        return (
            <div className="contacts">
                <img src={icon} className="contacts__logo"/>
                <span className="contacts__text">{text}</span>
            </div>
        );
    }
}

export default Contacts;