import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Login from './components/login';
import FriendList from './components/friendlist';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/friendlist' component={FriendList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
