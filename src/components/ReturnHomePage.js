import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ReturnHomePage extends Component {
  render() {
    return (
      <Link to="/">
        <button className="btn btn-outline-danger my-3">Return to HomePage</button>
      </Link>
    );
  }
}

export default ReturnHomePage;