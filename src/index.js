import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { getRoutes } from './routes';
import configureStore from './stores/configureStore.js'
import { history } from "./stores/history";

import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import * as serviceWorker from './serviceWorker';

const store = configureStore()

class AppProvider extends Component {

  constructor() {
      console.log("In app prpvider")
    super()
  }


  render() {
    return (
      <Provider store={store} >
        <ConnectedRouter history={history}>
          { getRoutes(store) }
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(
    <AppProvider/>
    , document.getElementById('root'));

//serviceWorker.unregister();