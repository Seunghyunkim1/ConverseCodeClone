import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Banner from "./Components/Banner/Banner";
import Main from "./Pages/Main/Main";

class App extends Component {
    render() {
        return (
            <Router>
                <Banner />
                <Route exact path="/" component={Main} />
                <Route path="/login" component />
            </Router>
        );
    }
}

export default App;