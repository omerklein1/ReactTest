import React, { Component } from 'react';
import axios from 'axios';

class ListItem extends Component {
constructor(){
    super();
    this.state = { data: [] };
}

async getCountries() {
    try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all');
        const myData = await response.data;
        this.setState({ data: myData })
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

    render() {
        return <>
{this.state.data.map(li => <li id={li.name}>
<div style="background-image: url("{li.flag}")"></div>
<h4>{li.name}</h4>
<h5>{li.subregion}</h5>
</li>
)}
        </>
    }
}

export default ListItem;