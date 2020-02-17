import axios from "axios";

export const SET_BLOG = "SET_BLOG";

export const setBlog = data => {
    return {
        type: SET_BLOG,
        payload: data
    };
};

export const fetchBlog = () => (dispatch, getState) => {
    const { users } = getState();

    if (users.isLogin === true) {
        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");

        return axios({
            method: "GET",
            url: `http://localhost:3009/users/${email}`,
            headers: { authorization: `Bearer ${token}` }
        }).then(response => {
            dispatch(setBlog(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    }
};
