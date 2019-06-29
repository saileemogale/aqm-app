import React from 'react';
import ReactDOM from 'react-dom';
import StockDataComponent from '../components';
import Container from '../containers'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StockDataComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
