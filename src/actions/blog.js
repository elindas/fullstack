import axios from "axios";
import jwt from "jsonwebtoken"

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
        // const email = localStorage.getItem("email");
        let decoded=jwt.verify(token, 'SECRET', function(err, decoded) {
            // console.log("this is tokennnn", decoded)
            return decoded
          });

        return axios({
            method: "GET",
            url: `http://localhost:3009/users/${decoded.email}`,
            headers: { authorization: `Bearer ${token}` }
        }).then(response => {
            dispatch(setBlog(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    }
};

export const deleteBlog = (id) => dispatch =>{
    console.log('ID DI REDUX',id)
    const token = localStorage.getItem("token");
    return axios({
        method: "DELETE",
        url: `http://localhost:3009/todos/${id}`,
        headers: { authorization: `Bearer ${token}` }
    }).then(response => {
        console.log(response.data);
        dispatch(setBlog(response.data.data));
    }).catch(error => {
        console.log(error);
    });
};