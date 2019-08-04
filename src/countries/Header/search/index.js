import React, { Component } from 'react';
import './search.css'

class Search extends Component {

change = e => {
    const text = e.target.value

    this.props.change(text)
}

    render() {
        return <input onChange={this.change} type="search" placeholder="Search Country By Name"></input>
    }
}

export default Search;