import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './layouts/main/main';

// Pages
import Home from './components/home/home';
import About from './components/about/about';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
        </Route>
    </Router>
);