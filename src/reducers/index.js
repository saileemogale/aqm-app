import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { history } from '../stores/history'
import aqiReducer from './aqiReducer'

const rootReducer = combineReducers({
  router: connectRouter(history),
  aqiReducer
}
);

export default rootReducer;