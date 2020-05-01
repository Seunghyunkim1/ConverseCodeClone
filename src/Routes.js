import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Banner from "./Components/Banner/Banner";
import Main from "./Pages/Main/Main";
import Category from "./Components/Category/Category";
import Footer from "./Components/footer/Footer";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import Forgotid from "./Pages/Forgot/ForgotUsername/ForgotUsername";
import Forgotpwd from "./Pages/Forgot/ForgotPassword/ForgotPassword";
import Header from "./Pages/Header/Header";

import Notmember from "./Pages/Notmembersearch/Notmembersearch";
import Register from "./Pages/Register/Register";
import Registersuccess from "./Pages/Registersuccess/Registersuccess";
import Cart from "./Pages/Cart/Cart";
import modalshow from "./Pages/Modal/modal";
import Cscenter from "./Pages/CsCenter/Cscenter";
import Mypage from "./Pages/Mypage/Mypage";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Banner />
        <Route exact path="/" component={Main} />
        <Route path="/category" component={Category} />
        <Route path="/product" component={Product} />
        <Route exact path="/login" component={Login} />
        <Route path="/login/forgotid" component={Forgotid} />
        <Route path="/login/forgotpwd" component={Forgotpwd} />
        <Route path="/login/Notmember" component={Notmember} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/register/registersuccess"
          component={Registersuccess}
        />
        <Route path="/Header" component={Header} />
        <Route path="/modal" component={modalshow} />
        <Route path="/cscenter" component={Cscenter} />
        <Route path="/footer" component={Footer} />
      </Router>
    );
  }
}

export default Routes;
