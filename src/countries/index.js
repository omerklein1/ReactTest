import React, { Component } from 'react'
import Header from './Header';
import List from './list';
import { initList } from '../actions'
import './countries.css'
import { connect } from 'react-redux';


class Countries extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true
        }
    }
    componentDidMount() {
        this.props.initList()
    }

    onTextChange = (text) => {
        this.setState({ text })
    }

    render() {
        const { countriesList } = this.props,
            { text } = this.state;
        console.log(this.state)

        return countriesList ? <main className='countries'>
            <Header  change={this.onTextChange} />
            <br></br>
            <br></br>
            <br></br>
            <List  />
        </main> : 'טוען'
    }
}

export default connect(state => ({
    countriesList: state.countriesList
}), { initList })(Countries)