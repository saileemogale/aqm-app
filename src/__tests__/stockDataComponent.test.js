import React from 'react';
import { configure, shallow } from 'enzyme';
import StockDataComponent from '../components';
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("StockDataComponent", () => {
  it("should render my component", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <StockDataComponent />
            </Provider>
        )
        expect(wrapper.getElements()).toMatchSnapshot();
    
  });
});