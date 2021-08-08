import { Component, CSSProperties } from 'react';

interface IState {
  number: number;
  color: string | null;
}

class LifeCycleSample extends Component<any, IState> {
  state = {
    number: 0,
    color: null,
  };

  myRef!: HTMLElement;

  constructor(props: any) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps: any, prevState: IState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps: any, nextState: IState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  handleClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  getSnapshotBeforeUpdate(prevProps: any, prevState: IState) {
    console.log('getSnapshotBeforeUpdate');
    if (prevProps.color !== this.props.color) {
      return this.myRef!.style.color;
    }
    return null;
  }

  componentDidUpdate(
    prevProps: any,
    prevState: IState,
    snapshot: string | null
  ) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트 되기 직전 색상: ', snapshot);
    }
  }

  render() {
    console.log('render');
    const style: CSSProperties = { color: this.props.color };

    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref!)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
