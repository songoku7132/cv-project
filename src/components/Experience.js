import React, { Component } from "react";

class Experience extends Component {
  render() {
    const { experience } = this.props;

    return (
      <div>
        <h2>Experience</h2>
        <p>Company name: <strong>{experience.company}</strong></p>
        <p>Position: <strong>{experience.position}</strong></p>
        <p>Date of work: <strong>{experience.dateW}</strong></p>
      </div>
    );
  }
}

export default Experience;

