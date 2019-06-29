import React from 'react';
import './App.css';
import Websocket from 'react-websocket';

class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      count: 90
    };
  }

  handleData(data) {
    let result = JSON.parse(data);
    this.setState({count: this.state.count + result.movement});
  }

  render() {
    return (
      <div>
        Count: <strong>{this.state.count}</strong>

        <Websocket url='ws://localhost:8888/live/product/12345/'
            onMessage={this.handleData.bind(this)}/>
      </div>
    );
  }
}

export default App;
