import React from "react";
import AddPost from "./AddPost";
import ListPosts from "./ListPosts";
import EditPost from "./EditPost";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/AddPost"} className="nav-link">
                  AddPost
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/ListPosts"} className="nav-link">
                  Post Lists
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <br />
        <Switch>
          <Route exact path="/AddPost" component={AddPost} />
          <Route exact path="/ListPosts" component={ListPosts} />
          <Route exact path="/EditPost/:id" component={EditPost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
