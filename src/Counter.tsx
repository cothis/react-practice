import { Component } from 'react';

interface IProps {}

interface IState {
  number: number;
  fixedNumber: number;
}

class Counter extends Component<IProps, IState> {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는값: {fixedNumber}</h2>
        <button onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
