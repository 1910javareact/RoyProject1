import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  LoginComponent  from './components/login-component/LoginContainer';
import { store } from './store';
import UsersDisplayComponent from './components/users-display/UsersDisplayContainer';
import ReimbursementsDisplayComponent from './components/reimbursements-display/ReimbursementsDisplayContainer';
import UserByIdDisplayComponent from './components/users-display/UserByIdDisplayContainer';
import { UpdateUserComponent } from './components/update-user-component/UpdateUserComponent';
import { PostReimbursementComponent } from './components/post-reimbursement-component/PostReimbursementComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/reimbursements' component={ReimbursementsDisplayComponent}></Route>
            <Route path='/login' component={LoginComponent}></Route>
            <Route path='/userid/:id' component={UserByIdDisplayComponent}/>
            <Route path='/users' component={UsersDisplayComponent}></Route>
            <Route path='/update-user' component={UpdateUserComponent}></Route>
            <Route path='/post-reimbursement' component={PostReimbursementComponent}></Route>
            <Route path='/' component={LoginComponent}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;