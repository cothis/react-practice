import React, { Component, CSSProperties, ErrorInfo } from 'react';

interface IState {
  error: boolean;
  message: string;
  info: string;
}

class ErrorBoundary extends Component {
  state: IState = {
    error: false,
    message: '',
    info: '',
  };

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.setState({
      error: true,
      message: error.message,
      info: info.componentStack,
    });
    console.log({ error, info });
  }

  render() {
    const style: CSSProperties = {
      color: 'red',
    };
    if (this.state.error)
      return (
        <div>
          <h2>에러가 발생했습니다!</h2>
          <h3 style={style}>{this.state.message}</h3>
          <div>{this.state.info}</div>
        </div>
      );
    return this.props.children;
  }
}

export default ErrorBoundary;
