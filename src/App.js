import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddUser from "./components/AddUser";
import User from "./components/User";
import UserList from "./components/UserList";

export default function App() {
  return (
    <Router>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href='/users' className='navbar-brand'>
          bezKoder
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={"/users"} className='nav-link'>
              Tutorials
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={"/add"} className='nav-link'>
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <Switch>
          <Route exact path={["/", "/users"]} component={UserList} />
          <Route exact path='/add' component={AddUser} />
          <Route path='/users/:id' component={User} />
        </Switch>
      </div>
    </Router>
  );
}
