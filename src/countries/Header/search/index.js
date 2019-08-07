import React, { Component } from 'react';
import { connect } from 'react-redux';
import { change } from '../../../actions';
import './search.css'

class Search extends Component {

    changeText = e => {
        const text = e.target.value
        this.props.change(text)
    }

    render() {
        return <input onChange={this.changeText} type="search" placeholder="Search Country By Name"></input>
    }
}

export default connect(state => ({
}), {change})(Search);;