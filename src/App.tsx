import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import { store } from './store';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/login' component={LoginComponent} />
            {/* <Route path='/reimbursement' component={ReimbursementComponent} /> */}
            {/* <Route path='/user' component={UserComponent} /> */}
            <Route path='/'>
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;