import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Banner from "./Components/Banner/Banner";
import Main from "./pages/Main/Main";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Product from "./Pages/Product/Product";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Banner />
        <Route exact path="/" component={Main} />
        <Route path="/login" component />
        <Route path="/Category" component={Category} />
        <Route path="/Footer" component={Footer} />
        <Route path="/product" component={Product} />
      </Router>
    );
  }
}

export default Routes;
