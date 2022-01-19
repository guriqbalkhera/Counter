import { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = JSON.parse(window.localStorage.getItem('counter')) || {
            count: 0
        }

    }

    setState(state) {
        window.localStorage.setItem('counter', JSON.stringify(state));
        super.setState(state);
    }

    increment = () => {
        this.setState({ ...this.state, count: this.state.count + 1 });
    }

    decrement = () => {
        this.setState({ ...this.state, count: this.state.count - 1 });
    }
    render() {
        return (
            <div className="App">
                <span>{this.state.count}</span>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

export default Counter;
