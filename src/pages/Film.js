import React, { Component } from 'react';
import { Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

import films from '../film.json'
import ReturnHomePage from "../components/ReturnHomePage"

class Film extends Component {
  render() {
    const { id } = this.props.match.params

    console.log(this.props.match.params)

    const filteredFilms = films.filter(film => film.id === Number(id))

    return (
      <div className="container">
        <ReturnHomePage />

        {filteredFilms.map((film) => (
          <>
            <h2 className="card-title text-center mb-5">{film.title}</h2>
            <img src={film.image} className="card-img img-fluid img-thumbnail my-3"/>
            <h4>Director: <strong>{film.director}</strong></h4>
            <h5>Cast: </h5>
            <ul style={{listStyleType:"none", fontSize: "18px"}}>
              <li>{film.stars[0]}</li>
              <li>{film.stars[1]}</li>
              <li>{film.stars[2]}</li>
            </ul>
            <div className="card-body">
              <h5 className="card-title">Synapsis:</h5>
              <p className="card-text">>{film.description}</p>
            </div>
          </>
        ))}

      </div>
    );
  }
}

export default Film;