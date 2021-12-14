import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import FriendList from './components/friendlist';
import AddFriend from './components/addFriend';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/friendlist' component={FriendList} />
          <Route path='/addfriend' component={AddFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
