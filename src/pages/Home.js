import React, { Component } from 'react';
import { Link } from "react-router-dom"

import films from '../film.json'

class Home extends Component {
  render() {
    return (
      <section>
        <h1>List of Film</h1>
        {films.map(film => (
          <Link to={`/Film/${film.id}`}>
            <h3>{film.title}</h3>
          </Link>
        ))}
      </section>
    );
  }
}

export default Home;