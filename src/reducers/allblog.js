import { SET_TODOS } from "../actions";

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                data: action.payload
            };
        default:
            return state || [];
    }
};
