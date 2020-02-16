import axios from "axios";

export const SET_USER = "SET_USER";

export const setUser = payload => {
    return {
        type: SET_USER,
        payload
    };
};

export const fetchUser = () => (dispatch, getState) => {
    const { users } = getState();

    if (users.isLogin === true) {
        const token = localStorage.getItem("token");

        return axios({
            method: "GET",
            url: "http://localhost:3007/users",
            headers: { authorization: `Bearer ${token}` }
        }).then(response => {
            dispatch(setUser(response.data));
        });
    }
};
