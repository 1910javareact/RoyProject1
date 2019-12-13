import React, { Component } from 'react'
import './App.css'
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <nav>
            <ERSNav />
          </nav>
          <Switch>
            <Route path='/login' component={LoginComponent} />
            <Route path='/reimbursement' component={ReimbursementComponent} />
            <Route path='/user' component={UserComponent} />
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>

  );
}

export default App;