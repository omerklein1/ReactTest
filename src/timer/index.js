import React, { Component } from 'react';
import './timer.css'
class Timer extends Component {
constructor(){
    super()

    this.state = {
        counter: 0
    }
}

setCounter = (num) => {
    const state = this.state;
    this.setState({ counter: state.counter + num})
}

    render () {
    const state = this.state;
    
            return <div className='timer '> 
        <h2 >{state.counter}</h2>
        <button onClick={() => this.setCounter(-1)} >down</button>
        <button onClick={() => this.setCounter(1)}>up</button>
    </div>
    }
    
}

export default Timer;