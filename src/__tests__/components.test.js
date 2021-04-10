import React from 'react';
import { configure, shallow } from 'enzyme';
import AirQualityMonitoringComponent from '../components';
import Adapter from "enzyme-adapter-react-16";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import { Server } from 'mock-socket';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe("AirQualityMonitoringComponent", () => {
    it("should render my component", () => {
            const wrapper = shallow(
                <Provider store={store}>
                    <AirQualityMonitoringComponent />
                </Provider>
            )
            expect(wrapper.getElements()).toMatchSnapshot();
        
    });

    it("connect to websocket", () => {
        const fakeURL = 'ws://localhost:1234';
        const mockServer = new Server(fakeURL);

        mockServer.on('connection', socket => {
            socket.on('message', data => {
              t.is(data, 'test message from app', 'we have intercepted the message and can assert on it');
              socket.send('test message from mock server');
            });
        });
    });
});