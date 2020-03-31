import React, { Component } from 'react';
class RollInfo extends Component {
    render() {
        const { vertical, title, content } = this.props;
        return (
            <div className= {vertical ? "rollInfo rollInfo--vertical" : "rollInfo"}>
                <span className="rollInfo__title">{title}</span>
                <span className="rollInfo__content">{content}</span>
            </div>
        )

    }
}

export default RollInfo;