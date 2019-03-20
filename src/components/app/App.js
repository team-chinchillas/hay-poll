import React from 'react';
import 'normalize.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Loading from '../Loading';

export default function App() {
  return (
    <Router>
      <>
      <Switch>
        <Route path="/" component={Loading}></Route>
      </Switch>
      </>
    </Router>
  );
}
