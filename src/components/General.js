import React, { Component } from "react";

class General extends Component {
  render() {
    const { general } = this.props;

    return (
      <div>
        <h2>General info</h2>
        <p>Name: <strong>{general.name}</strong></p>
        <p>Email: <strong>{general.email}</strong></p>
        <p>Phone number: <strong>{general.phone}</strong></p>
      </div>
    );
  }
}

export default General;

