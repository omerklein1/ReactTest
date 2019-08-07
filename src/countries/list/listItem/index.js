import React, { Component } from 'react';
import { connect } from 'react-redux';
import './listItem.css'

class ListItem extends Component {


    render() {
        const {countriesList, text=''} = this.props
        return <>
        
        {countriesList.filter(c => c.name.toLowerCase().startsWith(text))
            .map(list => <li id={list.name}>
            <div style={{backgroundImage: `url(${list.flag})`}}></div>
            <h4>{list.name}</h4>
            <h5>{list.subregion}</h5>
            </li>
            )}
        </>
    }
}

export default connect(state => ({
    countriesList: state.countriesList,
    text: state.change
}), {})(ListItem);

;