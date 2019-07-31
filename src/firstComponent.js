import React, { Component } from 'react';
// import ReactDOM from 'react-DOM';

class FirstComponent extends Component {

    render() {
        const props = this.props;
return <h1 >Hello {props.name}</h1>

    }

}

// ReactDOM.render();

export default FirstComponent;