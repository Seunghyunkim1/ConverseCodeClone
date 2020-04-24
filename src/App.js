import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Banner from "./components/banner/Banner";
import Main from "./pages/main/Main";
import Login from "./pages/Login/Login";
import Shoesmenu from "./pages/Shoesmenu/Shoesmenu";
import Header from "./pages/Header/Header";
import Forgotid from "./pages/Forgotusername/Forgotusername";
import Forgotpwd from "./pages/Forgotpassword/Forgotpassword";
import Notmember from "./pages/Notmembersearch/Notmembersearch";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Registersuccess from "./pages/Registersuccess/Registersuccess";
import Cartadd from "./pages/Cartadd/Cartadd";
import Modal from "./pages/Modal/modal";

class App extends Component {
  render() {
    return (
      <Router>
        <Banner />
        <Route exact path="/" component={Main} />
        <Route exact path="/login" component={Login} />
        <Route path="/login/forgotid" component={Forgotid} />
        <Route path="/login/forgotpwd" component={Forgotpwd} />
        <Route path="/login/Notmember" component={Notmember} />
        <Route path="/cart" component={Cart} />
        <Route path="/cartadd" component={Cartadd} />
        <Route exact path="/Register" component={Register} />
        <Route path="/Register/registersuccess" component={Registersuccess} />
        <Route path="/Shoesmenu" component={Shoesmenu} />
        <Route path="/Header" component={Header} />
        <Route path="/modaltest" component={Modal} />
      </Router>
    );
  }
}

export default App;
