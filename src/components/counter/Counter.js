import React, { Component } from 'react';
import {connect} from "react-redux"

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

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);
