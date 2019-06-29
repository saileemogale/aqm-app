import StockDataComponent from '../components'
import { connect } from 'react-redux'
import { updateStockData } from '../actions'

var mapStateToProps = function(state, ownProps){
    return {
        stockData: state.stockData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateStockData: (payload) => dispatch(updateStockData(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StockDataComponent)
