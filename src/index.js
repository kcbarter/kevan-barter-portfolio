import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Portfolio from './components/Portfolio';
import App from './components/App';
import Contact from './components/Contact';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' component={App} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
        </Switch>
    </Router>, 
    document.getElementById('root')
);