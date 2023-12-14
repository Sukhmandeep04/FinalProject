import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Projects from './components/Projects';
import Login from './components/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          {isLoggedIn ? <Redirect to="/" /> : <Login onLogin={handleLogin} />}
        </Route>
        <PrivateRoute path="/" exact component={Home} isLoggedIn={isLoggedIn} />
        <PrivateRoute path="/tasks" component={Tasks} isLoggedIn={isLoggedIn} />
        <PrivateRoute path="/projects" component={Projects} isLoggedIn={isLoggedIn} />
      </Switch>
    </Router>
  );
};

// PrivateRoute component to protect routes
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
    )}
  />
);

export default App;
