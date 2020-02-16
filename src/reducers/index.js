import { combineReducers } from "redux";
import users from "./users";
import blog from "./blog";
import allblog from "./allblog"

export default combineReducers({users, blog, allblog });
