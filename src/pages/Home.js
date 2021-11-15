import React, { Component } from 'react';
import { Link } from "react-router-dom"

import films from '../film.json'

class Home extends Component {
  render() {
    return (
      <section className="text-center">
        <h1 className="my-5">List of Film</h1>
        {films.map(film => (
          <Link to={`/Film/${film.id}`}>
            <h3 className="my-2">{film.title}</h3>
          </Link>
        ))}
      </section>
    );
  }
}

export default Home;