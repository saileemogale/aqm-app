import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { history } from '../stores/history'
import stockReducer from './stockReducer'

const rootReducer = combineReducers({
  router: connectRouter(history),
  stockReducer
}
);

export default rootReducer;