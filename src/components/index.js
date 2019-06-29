import React from 'react';
import Websocket from 'react-websocket';
import moment from 'moment';
import { Table } from 'reactstrap';


class StockDataComponent extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      stockData: this.props.stockData ? this.props.stockData : {}
    };
  }

  handleData(data) {
    //console.log(JSON.parse(data))
    let parsedData = JSON.parse(data)
    let that = this
    let stock = this.state.stockData
    parsedData.map(function([name, price]){
        stock[name] = {price: price, date: moment().utc().format('MM/DD/YYYY HH:mm:ss')}
        
    })
    this.setState({stockData: stock})
    this.props.updateStockData(this.state.stockData)
  }

  render() {
      let that = this
    return (
        <div>
        <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                    {
                        
                        Object.keys(this.state.stockData).map(function(key){
                            return(
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{that.state.stockData[key]['price']}</td>
                                    <td>{that.state.stockData[key]['date']}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
      </Table>
      <Websocket url='ws://stocks.mnet.website'
            onMessage={this.handleData.bind(this)}/>
      </div>
    );
  }
}

export default StockDataComponent;
