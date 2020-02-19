import { SET_LOGIN } from "../actions";

const token = localStorage.getItem("token");

const initialState = token
  ? {
      isLogin: true
    }
  : {
      isLogin: false
    };

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      console.log("login");
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
