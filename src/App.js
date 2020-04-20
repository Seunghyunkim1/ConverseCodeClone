import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Banner from "./components/banner/Banner";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login"
import Category from "./pages/category/Category";
import Header from './pages/header/Header';
import Forgotid from "./pages/forgotusername/Forgotusername"

class App extends Component {
    render() {
        return (
            <Router>
                <Banner />
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <Route path="/login/forgotid" component={Forgotid} />
                <Route path="/Category" component={Category} />
                <Route path="/Header" component={Header} />
                
            </Router>
        );
    }
}

export default App;