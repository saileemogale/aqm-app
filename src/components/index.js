import React from 'react';
import Websocket from 'react-websocket';
import moment from 'moment';
import { Table } from 'reactstrap';


class AirQualityMonitoringComponent extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data ? this.props.data : {}
    };
  }

  handleData(data) {
    //console.log(JSON.parse(data))
    let parsedData = JSON.parse(data)
    let that = this
    let aqiData = this.state.data
    parsedData.map(function(record){       
        if(aqiData[record['city']] && aqiData[record['city']]['aqi'] > 400){
          aqiData[record['city']] = {api: record['aqi'], date: moment().format('LTS'), style: 'dark-red'}
        } else if(aqiData[record['city']] && aqiData[record['city']]['aqi'] > 300 && aqiData[record['city']]['aqi'] <= 400) {
          aqiData[record['city']] = {aqi: record['aqi'], date: moment().format('LTS'), style: 'red'}
        } else if(aqiData[record['city']] && aqiData[record['city']]['aqi'] > 200 && aqiData[record['city']]['aqi'] <= 300) {
          aqiData[record['city']] = {aqi: record['aqi'], date: moment().format('LTS'), style: 'orange'}
        } else if(aqiData[record['city']] && aqiData[record['city']]['aqi'] > 100 && aqiData[record['city']]['aqi'] <= 200) {
          aqiData[record['city']] = {aqi: record['aqi'], date: moment().format('LTS'), style: 'yellow'}
        } else if(aqiData[record['city']] && aqiData[record['city']]['aqi'] > 50 && aqiData[record['city']]['aqi'] <= 100) {
          aqiData[record['city']] = {aqi: record['aqi'], date: moment().format('LTS'), style: 'light-green'}
        } else {
          aqiData[record['city']] = {aqi: record['aqi'], date: moment().format('LTS'), style: 'green'}
        }
    })
    this.setState({data: aqiData})
    this.props.updateAqiData(this.state.data)
  }

  render() {
      let that = this
    return (
        <div>
        <Table>
                <thead>
                <tr>
                    <th>City</th>
                    <th>Current AQI</th>
                    <th>Last Updated</th>
                </tr>
                </thead>
                <tbody>
                    {
                        
                        Object.keys(this.state.data).map(function(key){
                            return(
                                <tr key={key} className={`${that.state.data[key]['style']}-row`}>
                                    <td>{key}</td>
                                    <td>{that.state.data[key]['aqi']}</td>
                                    <td>{that.state.data[key]['date']}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
      </Table>
      <Websocket url='ws://city-ws.herokuapp.com'
            onMessage={this.handleData.bind(this)}/>
      </div>
    );
  }
}

export default AirQualityMonitoringComponent;
