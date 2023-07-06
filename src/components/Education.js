import React, { Component } from "react";

class Education extends Component {
  render() {
    const { education } = this.props;

    return (
      <div>
        <h2>Education</h2>
        <p>School name: <strong>{education.school}</strong></p>
        <p>Degree: <strong>{education.degree}</strong></p>
        <p>Date of study: <strong>{education.date}</strong></p>
      </div>
    );
  }
}

export default Education;

