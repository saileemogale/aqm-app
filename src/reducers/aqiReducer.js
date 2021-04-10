import { createReducer } from '../utils'
import { UPDATE_DATA } from '../constants'

const initialState = {
	data: {}
}

export default createReducer(initialState, {
	[UPDATE_DATA]: (state, payload) => {
		return {
			...state,
			data: payload
		}
	}
})
