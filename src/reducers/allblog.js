import { SET_TODOS, GET_BY_ID_BLOG } from "../actions";

const initialState = {
    data: [],
    detailid: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                data: action.payload
            };
        case GET_BY_ID_BLOG:
            return{
                detailid: action.payload
            }
        default:
            return state;
    }
};
