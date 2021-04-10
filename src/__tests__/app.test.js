import React from 'react';
import ReactDOM from 'react-dom';
import AirQualityMonitoringComponent from '../components';
import Container from '../containers'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AirQualityMonitoringComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
