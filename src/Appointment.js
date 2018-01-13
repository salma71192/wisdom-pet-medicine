import React, { Component } from 'react';

class Appointment extends Component {
  handleDelete = (e) => {
    this.props.onDelete(this.props.singleItem);
  }

  render() {
    return (
      <li className="pet-item media">
        <div className="pull-right">
          <button className="pet-delete btn btn-xs btn-danger" onClick={this.handleDelete}>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </div>
        <div className="pet-head">
          <span className="pet-name">{this.props.singleItem.petName}</span>
          <span className="apt-date pull-right">{this.props.singleItem.aptDate}</span>
        </div>
        <div className="owner-name">
          <span className="label-item">Owner: {this.props.singleItem.ownerName}</span>
        </div>
        <div className="apt-notes">{this.props.singleItem.aptNotes}</div>
      </li>

    ) // return
  } // render
} // Appointment class

export default Appointment;
