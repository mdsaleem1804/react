import React from "react";
import AddPost from "./AddPost";
import EditPost from "./EditPost";
import ListPosts from "./ListPosts";
import ListPhp from "./ListPhp";
import Test from "./Test";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import EditPhp from "./EditPhp";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/AddPost"} className="nav-link">
                  Add Post
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/ListPosts"} className="nav-link">
                  ListPosts
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/ListPhp"} className="nav-link">
                  ListPhp
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/EditPhp"} className="nav-link">
                  EditPhp
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <br />
        <Switch>
          <Route exact path="/AddPost" component={AddPost} />
          <Route exact path="/EditPost/:id" component={EditPost} />
          <Route exact path="/Test" component={Test} />
          <Route exact path="/ListPosts" component={ListPosts} />
          <Route exact path="/EditPhp/:id" component={EditPhp} />
          <Route exact path="/ListPhp" component={ListPhp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
