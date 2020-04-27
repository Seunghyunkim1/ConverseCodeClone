import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Banner from "./Components/Banner/Banner";
import Main from "./Pages/Main/Main";
import Product from "./Pages/Product/Product";
import Store from "./Pages/Store/Store";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Banner />
        <Route exact path="/" component={Main} />
        <Route path="/login" component />
        <Route path="/product" component={Product} />
        <Route path="/store" component={Store} />
      </Router>
    );
  }
}

export default Routes;
