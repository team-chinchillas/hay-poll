import React from 'react';
import 'normalize.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Loading from '../Loading';
import { withSession } from '../../containers/auth/withSession';
import Callback from '../../containers/auth/Callback';
import Home from '../../pages/Home';

export default function App() {
  return (
    <Router>
      <>
      <Switch>
        <Route exact path="/callback" component={Callback}></Route>
        <Route exact path="/home" component={withSession(Home)} />
        <Route exact path="/" component={withSession(Loading)}></Route>
      </Switch>
      </>
    </Router>
  );
}
