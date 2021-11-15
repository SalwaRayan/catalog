import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./pages/Home"
import Film from "./pages/Film"
import PageNotFound from "./pages/PageNotFound"

class App extends Component {
  render() {
    return (
      <BrowserRouter>


        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Film/:id" component={Film} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
