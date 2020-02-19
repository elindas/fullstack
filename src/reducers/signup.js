import { SET_SIGNUP } from "../actions";

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SIGNUP:
            return {
                data: action.payload
            };
        default:
            return state
    }
};