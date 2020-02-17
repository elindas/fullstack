import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Blog from "./components/Blog"
import Allblog from "./components/Allblog"
import FormBlog from "./components/FormBlog"

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Allblog></Allblog>
                </Route>
                <Route exact path="/login">
                    <SignIn />
                </Route> 
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/users">
                    <FormBlog />
                     <Blog />
                     
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
