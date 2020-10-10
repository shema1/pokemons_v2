import React, { Component } from 'react';

import './App.css';
import { observer } from 'mobx-react';
import storeState from './store/store'


@observer class Counter extends Component {

    handleIncrement = () => { storeState.increment() };
    handleDecrement = () => { storeState.decrement() };
    
    render() {
        return (
            <div>
                counter
                <h1>{storeState.count}</h1>
                <button onClick={this.handleDecrement}>-1</button>
                <button onClick={this.handleIncrement}>+1</button>
            </div>
        );
    }

}

export default Counter;
