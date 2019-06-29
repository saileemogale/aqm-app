import { createReducer } from '../utils'
import { UPDATE_STOCK_DATA } from '../constants'

const initialState = {
	stockData: {}
}

export default createReducer(initialState, {
	[UPDATE_STOCK_DATA]: (state, payload) => {
		return {
			...state,
			stockData: payload
		}
	}
})
