import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Title.css'


class Title extends Component {

    render() {
        return <>
<h1>Countries </h1>
<span>({this.props.countriesList.length})</span>
        </>
    }
}

export default connect(state => ({
    countriesList: state.countriesList
}), {})(Title);