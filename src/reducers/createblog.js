import { CREATE_BLOG } from "../actions";

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_BLOG:
            return {
                data: action.payload
            };
        default:
            return state
    }
};