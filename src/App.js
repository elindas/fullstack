import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Blog from "./components/Blog";
import Allblog from "./components/Allblog";
import FormBlog from "./components/FormBlog";
import Updateblog from "./components/Updateblog";
import Detailblog from "./components/Detailblog";
class App extends Component {
  render() {
    console.log("Props app", this.props);
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Allblog />
          </Route>

          <Route path={'/blog/detail/:id'} component={Detailblog} />

           
          <Route exact path="/login">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/userblog">
            {this.props.isLogin && this.props.isLogin !== null ? (
              <Blog />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/createblog">
            {this.props.isLogin && this.props.isLogin !== null ? (
              <FormBlog />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route exact path="/blog/edit/:id">
            {this.props.isLogin && this.props.isLogin !== null ? (
              <Updateblog />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogin: state.users.isLogin
  };
};

export default connect(mapStateToProps, null)(App);
