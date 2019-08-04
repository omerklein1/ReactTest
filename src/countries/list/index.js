import React, { Component } from 'react';
import ListItem from './listItem';
// z
class List extends Component {
    render (){
        return <ul>
            <ListItem {...this.props}/>
            </ul>
        
    }
}

export default List