import React from 'react';
import configureStore from 'redux-mock-store'
import AirQualityMonitoringComponent from '../components';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { mount } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });
 
const initialState = {
    data: {
        'mumbai': {aqi: 42.76, date: '10:39:15 AM', style: 'green'}
    }
}; 
const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(
        <AirQualityMonitoringComponent data={initialState.data}/>  
    )
})

describe('data', () => {
    it('match class on screen', () => {
        expect(wrapper.find('.green-row')).to.have.length(1);
    });

})