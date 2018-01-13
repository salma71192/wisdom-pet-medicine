import React, { Component } from 'react';
import Appointment from './Appointment';
import Data from './data.json';
import _ from 'lodash';


class MainInterface extends Component {
  state = {
    data: []
  }

  // Load data from data.json file
  componentDidMount() {
    this.setState({
      data: Data
    });
  }

  deleteAppointment(item) {
    var appsItems = this.state.data;
    var currentApps = _.without(appsItems, item);
    this.setState({
      data: currentApps
    });
  }

  render() {
    var appItems = this.state.data;
    var renderAppItems = appItems.map((item, index) => {
      return (
              <Appointment
              key={index}
              singleItem={item}
              onDelete={(e) => this.deleteAppointment(e)} />
            )
        });

    return (
      <div className="interface">
        <ul className="item-list media-list">
        {renderAppItems}
        </ul>
      </div>
    )
  }
}

export default MainInterface;
