import axios from "axios";

export const SET_TODOS = "SET_TODOS";

export const setTodo = (data) => {
    return {
        type: SET_TODOS,
        payload:data
    };
};



export const fetchTodos = () => dispatch => {
    return axios({
        method: "GET",
        url: "http://localhost:3007/todos",
    }).then(response => {
        dispatch(setTodo(response.data.data));
    }).catch(error => {
        console.log(error);
    });
};
