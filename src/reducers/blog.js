import { SET_BLOG, DELETE_BLOG, UPDATE_BLOG } from "../actions";

const initialState = {
  data: [],
  updateData:{}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOG:
      return {
        data: action.payload
      };
    case DELETE_BLOG:
      return {
        data: action.payload
      };
    case UPDATE_BLOG:
      return {
        updateData: action.payload
      };
    default:
      return state || [];
  }
};
