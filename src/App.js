import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Banner from "./components/banner/Banner";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login"
import Category from "./pages/category/Category";
import Header from './pages/header/Header';
import Forgotid from "./pages/forgotusername/Forgotusername";
import Forgotpwd from "./pages/forgotpassword/Forgotpassword";
import Notmember from "./pages/notmembersearch/Notmembersearch";
import Register from "./pages/register/Register";
import Cart from "./pages/cart/Cart";
import Registersuccess from "./pages/registersuccess/Registersuccess";

class App extends Component {
    render() {
        return (
            <Router>
                <Banner />
                <Route exact path="/" component={Main} />
                <Route exact path="/login" component={Login} />
                <Route path="/login/forgotid" component={Forgotid} />
                <Route path="/login/forgotpwd" component={Forgotpwd}/>
                <Route path="/login/Notmember" component={Notmember}/>
                <Route path="/cart" component={Cart}/>
                <Route exact path="/Register" component={Register}/>
                <Route path="/Register/registersuccess" component={Registersuccess}/>
                <Route path="/Category" component={Category} />
                <Route path="/Header" component={Header} />
                
                
            </Router>
        );
    }
}

export default App;