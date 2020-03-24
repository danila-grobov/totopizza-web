import React from 'react';
import "../styles/index.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="hello_world">
                Hello World!
            </div>
        );
    }
}