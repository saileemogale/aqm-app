import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { getRoutes } from './routes';
import configureStore, { history } from './stores/configureStore.js';

import './index.css';
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
    , document.getElementById('container'));

//serviceWorker.unregister();