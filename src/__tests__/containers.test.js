import React from 'react';
import configureStore from 'redux-mock-store'
import StockDataComponent from '../components';
import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { mount } from 'enzyme';
import { expect } from 'chai';

configure({ adapter: new Adapter() });
 
const initialState = {
    stockData: {
        'aks': {price: 42.76, date: '10:39:15 AM', style: 'red'}
    }
}; 
const mockStore = configureStore();
let wrapper;
let store;

beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(
        <StockDataComponent stockData={initialState.stockData}/>  
    )
})

describe('stockData', () => {
    it('match class on screen', () => {
        expect(wrapper.find('.red-row')).to.have.length(1);
    });

})