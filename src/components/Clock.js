import React, { Component } from "react";

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export default class Clock extends Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.startTime();
    }, 500);
  }

  startTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  render() {
    return (
      <div className="clock">
        <b>{this.props.content}</b>
        {this.state.hours}:{this.state.minutes}:{this.state.seconds}
        <br/>
      </div>
    );
  }
}
