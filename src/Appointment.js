import React, { Component } from 'react';
import Data from './data.json';

class Appointment extends Component {
  state = {
    data: []
  }

  componentDidMount() {
      this.setState({
        data: Data
      });
  }


  render() {
    var appItems = this.state.data;
    console.log(appItems);
    var renderAppItems = appItems.map((item, index) => {
          return(
            <li className="pet-item media" key={index}>
              <div className="pet-head">
                <span className="pet-name">this.state.data[index].petName</span>
                <span className="apt-date pull-right">this.state.data[index].aptDate</span>
              </div>
              <div className="owner-name">
                <span className="label-item">Owner: {this.state.data[index].ownerName}</span>
              </div>
              <div className="apt-notes">{this.state.data[index].aptNotes}</div>
            </li>
          )
        });

    return (
      <ul className="item-list media-list">{renderAppItems}</ul>
    )
  }
}

export default Appointment;
