import { UPDATE_STOCK_DATA } from '../constants/index'

export function updateStockData(payload) {  
    return {
        type: UPDATE_STOCK_DATA,
        payload: payload
    }
}