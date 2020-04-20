import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Banner from "./components/banner/Banner";
import Main from "./pages/main/Main";

class App extends Component {
    render() {
        return (
            <Router>
                <Banner />
                <Route exact path="/" component={Main} />
                <Route path="/login" component />
                <h1>App!</h1>
            </Router>
        );
    }
}

export default App;