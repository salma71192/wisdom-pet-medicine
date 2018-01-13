import React, { Component } from 'react';
import Data from './data.json';

class Appointment extends Component {
  state = {
    data: []
  }

  // Load data from data.json file
  componentDidMount() {
    this.setState({
      data: Data
    });
  }

  handleDelete = (e) => {
    var allItems = this.state.data;
    allItems.splice(e.target.value, 1);
    console.log(e.target.value);
    console.log(allItems);
    this.setState({
      data: allItems
    });
  };

  render() {
    var appItems = this.state.data;
    var renderAppItems = appItems.map((item, index) => {
          return(
            <li className="pet-item media" key={index}>
              <div className="pull-right">
                <button className="pet-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
                  <span className="glyphicon glyphicon-remove"></span>
                </button>
              </div>
              <div className="pet-head">
                <span className="pet-name">{this.state.data[index].petName}</span>
                <span className="apt-date pull-right">{this.state.data[index].aptDate}</span>
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
    ) // return
  } // render
} // Appointment class

export default Appointment;
