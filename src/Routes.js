import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Banner from "./Components/Banner/Banner";
import Main from "./pages/Main/Main";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Product from "./Pages/Product/Product";
import Login from "./Pages/Login/Login";
import Shoesmenu from "./Pages/Shoesmenu/Shoesmenu";
import Header from "./Pages/Header/Header";
import Forgotid from "./Pages/Forgotusername/Forgotusername";
import Forgotpwd from "./Pages/Forgotpassword/Forgotpassword";
import Notmember from "./Pages/Notmembersearch/Notmembersearch";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";
import Registersuccess from "./Pages/Registersuccess/Registersuccess";
import Cartadd from "./Pages/Cartadd/Cartadd";
import Mypage from "./Pages/Mypage/Mypage";
import modalshow from "./Pages/Modal/modal";
import Cscenter from "./Pages/Cscenter/Cscenter";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Banner />
        <Route exact path="/" component={Main} />
        <Route path="/login" component={Login} />
        <Route path="/product" component={Product} />
        <Route path="/login/forgotid" component={Forgotid} />
        <Route path="/login/forgotpwd" component={Forgotpwd} />
        <Route path="/login/Notmember" component={Notmember} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/cart" component={Cart} />
        <Route path="/cartadd" component={Cartadd} />
        <Route exact path="/Register" component={Register} />
        <Route path="/Register/registersuccess" component={Registersuccess} />
        <Route path="/Shoesmenu" component={Shoesmenu} />
        <Route path="/Header" component={Header} />
        <Route path="/modal" component={modalshow} />
        <Route path="/cscenter" component={Cscenter} />
      </Router>
    );
  }
}

export default Routes;
