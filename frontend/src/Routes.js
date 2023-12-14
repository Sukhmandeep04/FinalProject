import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Tasks from './components/Tasks';
import Projects from './components/Projects';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
};

export default Routes;
