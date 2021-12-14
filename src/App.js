import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import FriendList from './components/friendlist';
import AddFriend from './components/addFriend';
import Logout from './components/logout';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/friendlist' component={FriendList} />
          <PrivateRoute path='/addfriend' component={AddFriend} />
          <PrivateRoute path='/logout' component={Logout} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
