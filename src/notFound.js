import React from 'react'
import { Button } from 'reactstrap'

class NotFound extends React.Component {
  constructor(props) {
    super(props)
  }


  render(){
    return (
      <div>
        <div className="row not-found-msg">
          <div className="col">
            <h3>404 page not found</h3>
            <p>We are sorry but the page you are looking for was moved, removed, renamed or might never existed.</p>
          </div>
        </div>
      </div>
    )
  }
}


export default NotFound;
