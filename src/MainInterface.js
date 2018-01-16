import React, { Component } from 'react';
import Appointment from './Appointment';
import AddAppointment from './AddAppointment';
import Search from './Search';
import Data from './data.json';
import _ from 'lodash';


class MainInterface extends Component {
  state = {
    data: [],
    visible: false,
    orderBy: 'petName',
    orderDir: 'asc'
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

  // Toggle add appointment form visibility
  handleToggle = (e) => {
    var toggleVisibility = !this.state.visible;
    this.setState({
      visible: toggleVisibility
    });
  }

  handleAddAppointment = (appointmentData) => {
    var currentAppointments = this.state.data;
    currentAppointments.push(appointmentData);
    this.setState({
      data: currentAppointments
    });
  }

  reOrder = (sort, dir) => {
    // render orderby
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var orderedItems = _.orderBy(this.state.data,
      (item) => { return item[orderBy] },
      (item) => { return item[orderDir] }
    );

    this.setState({
      orderBy: sort,
      orderDir: dir,
      data: orderedItems
    });
  }

  render() {
    // render appointments
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
        <AddAppointment
           visibility={this.state.visible}
           onChange={this.handleToggle}
           handleAdd={this.handleAddAppointment}
         />

         <Search
           orderBy = {this.state.orderBy}
           orderDir = {this.state.orderDir}
           reOrder = {this.reOrder}
         />

        <ul className="item-list media-list">
          {renderAppItems}
        </ul>
      </div>
    )
  }
}

export default MainInterface;
