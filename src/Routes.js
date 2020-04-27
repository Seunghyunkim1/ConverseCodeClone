import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Banner from "./components/Banner/Banner";
import Main from "./Pages/Main/Main";
import Category from "./components/Category/Category";
import Footer from "./components/Footer/Footer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Banner />
        <Route exact path="/" component={Main} />
        <Route path="/login" component />
        <Route path="/Category" component={Category} />
        <Route path="/Footer" component={Footer} />

        <h1>App!</h1>
      </Router>
    );
  }
}

export default Routes;
