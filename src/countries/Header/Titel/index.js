import React, { Component } from 'react';
import './Title.css'

class Title extends Component {

    render() {
        return <>
<h1>Countries </h1>
<span>({this.props.countriesList.length})</span>
        </>
    }
}

export default Title;