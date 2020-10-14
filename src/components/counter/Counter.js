import React, { Component } from 'react';
class Counter extends Component{
    render(){
        return(
            <div className="counter-container">
                <button className="counter-control">&ndash;</button>
                <span className="count">0</span>
                <button className="counter-control" >+</button>
            </div>
        );
    }
}
export default Counter;
