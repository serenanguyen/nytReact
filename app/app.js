// Inclue the React library
import React from "react";

import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, HashRouter} from "react-router-dom";

// reference components
import Main from "./components/Main";
import Search from "./components/children/Search";
import Results from "./components/children/Results";
import Saved from "./components/children/Saved";

const app = document.getElementById('app');

ReactDOM.render(
    <HashRouter>
        <Route path="/" component={Main}>
            <Route path="saved" component={Saved}></Route>
            <Route path="search" component={Search}></Route>
        </Route>
    </HashRouter>,
    app);