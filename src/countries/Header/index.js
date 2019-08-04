import React, { Component } from 'react';
import Title from './Titel';
import Search from './search';
// z
class Header extends Component {
    render (){
        return <div className='title-nav'>
            <Title {...this.props}/>
            <Search change={this.props.change}/>
            </div>
        
    }
}

export default Header