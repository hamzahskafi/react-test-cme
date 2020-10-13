import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Navbar extends Component {
    render(){
        return(
            <nav className="navBar">
                <ul>
                    <li><NavLink exact to="/">Search</NavLink></li>
                    <li><NavLink to="/counter">Counter</NavLink></li>
                </ul>
            </nav>
        );
    }
}
export default Navbar;