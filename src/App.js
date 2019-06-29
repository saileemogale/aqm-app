import React from 'react';
import './App.css';
import Container from '../src/containers/index'
import StockDataComponent from '../src/components/index'

class App extends React.Component {
 
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <Container>
        <StockDataComponent/>
      </Container>
    );
  }
}

export default App;
