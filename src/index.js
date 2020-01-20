import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { HashRouter ,Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Portfolio from './components/Portfolio';
import App from './components/App';

const history = createBrowserHistory();

ReactDOM.render(
    <HashRouter history={history}>
        <Switch>
            <Route exact={true} path='/' component={App} />
            <Route path='/portfolio' component={Portfolio} />
        </Switch>
    </HashRouter>, 
    document.getElementById('root')
);