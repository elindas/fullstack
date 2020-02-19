import { combineReducers } from "redux";
import users from "./users";
import blog from "./blog";
import allblog from "./allblog"
import createblog from "./createblog"
// import login from "./users"

export default combineReducers({users, blog, allblog, createblog});
