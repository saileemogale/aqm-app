import AirQualityMonitoringComponent from '../components'
import { connect } from 'react-redux'
import { updateAqiData } from '../actions'

var mapStateToProps = function(state, ownProps){
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAqiData: (payload) => dispatch(updateAqiData(payload)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AirQualityMonitoringComponent)
