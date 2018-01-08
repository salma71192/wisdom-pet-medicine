import React, { Component } from 'react';

class MainInterface extends Component {
  state = {
    title: "Appointements",
    show: true
  }

  render() {
    return (
      <div className="interface">
        <h1>{this.state.title}</h1>
        <ul>
          <li>Salma 03:30</li>
          <li>Sohib 07:30</li>
        </ul>
      </div>
    )
  }
}

export default MainInterface;
