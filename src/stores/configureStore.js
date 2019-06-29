import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import createLogger from 'redux-logger';
import reducers from '../reducers/index.js'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

export default function configureStore(initialState = {}) {
  const logger = createLogger();
  const middleware = applyMiddleware(routerMiddleware(history), logger);

  // add `autoRehydrate` as an enhancer to your store (note: `autoRehydrate` is not a middleware)
  const store = createStore(
    reducers,
    compose(
        middleware
      )
  )

  return store;
}
