import React, { Component } from 'react';
import ReturnHomePage from '../components/ReturnHomePage';

class PageNotFound extends Component {
  render() {
    return (
      <div className="text-center">
        <h1>404 - Error</h1>
        <p>Page not found</p>
        <ReturnHomePage />
      </div>
    );
  }
}

export default PageNotFound;