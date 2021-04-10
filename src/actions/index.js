import { UPDATE_DATA } from '../constants/index'

export function updateAqiData(payload) {  
    return {
        type: UPDATE_DATA,
        payload: payload
    }
}