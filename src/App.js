import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import UserList from './Components/UserList';
import userService from './Services/userService';
import UserInfo from './Components/UserInfo';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getAllUsers()
      .then((userData) => {
        console.log(userData);
        setUsers(userData);
      });
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/users/:id">
          <UserInfo users={users} />
        </Route>
        <Route path="/">
          <UserList users={users} />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
