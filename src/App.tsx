import { Component } from 'react';
import IterationSample from './IterationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  scrollBox!: ScrollBox;

  render() {
    return <IterationSample />;
  }
}

export default App;
