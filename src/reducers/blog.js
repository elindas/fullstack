import { SET_BLOG, DELETE_BLOG } from "../actions";

const initialState = {
    data: []
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
        default:
            return state || [];
    }
};
