import React, { Component } from 'react'
import axios from 'axios'
import Header from './Header';
import List from './list';

class Countries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }
    async componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => {
                this.setState({ loading: false, countriesList: res.data })
            })
            .catch(error => console.log(error.message))
    }

    onTextChange = (text) => {
        this.setState({ text })
    }

    render() {
        const { loading, countriesList, text } = this.state
        console.log(this.state)

        return loading ? "טוען" : <main className='countries'>
            <Header countriesList={countriesList} change={this.onTextChange} />
            <br></br>
            <br></br>
            <br></br>
            <List countriesList={countriesList} text={text}/>
        </main>
    }
}

export default Countries