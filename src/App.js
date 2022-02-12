import React, { useState, useEffect } from "react";
import UserList from "./Components/UserList";
import userService from "./Services/userService";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import UserInfo from "./Components/UserInfo";


const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService
      .getAllUsers()
      .then(userData => {
        console.log(userData)
        setUsers(userData)
      })

  }, [])
  return (
    <Router>
      <Switch>
        <Route path="/users/:id" >
          <UserInfo users={users} />
        </Route>
        <Route path="/users">
          <UserList users={users} />
        </Route>
      </Switch>
    </Router>

  )
}
export default App;
