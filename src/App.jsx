import React from 'react';
import './static/less/main.less';

class App extends React.Component { // eslint-disable-line
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    return (<div className="react-main">
      <h1>This is React-Builder</h1>
      <p className="react-p">Support less</p>
      <p className="react-h">Support eslint</p>
      <p className="react-h">HMR loading</p>
      <p className="react-h">
        If you like this you can star and fork
        <a href="https://github.com/TYRMars/React-Builder">React-Builder</a>
      </p>
    </div>) // eslint-disable-line
  }
}

export default App
