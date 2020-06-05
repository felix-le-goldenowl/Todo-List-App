/* eslint-disable import/no-unresolved */
import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
// import * as firebase from 'firebase';
import Todos from 'containers/Todos';
import Login from 'containers/Login';
// import firebaseConfig from './firebase.config';
import NoMatch from 'components/NoMatch';
import { PrivateRoute, LoginRoute } from 'components/PrivateRoute';

// firebase.initializeApp(firebaseConfig);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" render={() => <Redirect to="/todos" />} exact />
        <PrivateRoute path="/todos" exact component={Todos} />
        <LoginRoute path="/login" exact component={Login} />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
