import axios from "axios";
import jwt from "jsonwebtoken"

export const SET_BLOG = "SET_BLOG";
export const DELETE_BLOG = "DELETE_BLOG";

export const setBlog = data => {
    return {
        type: SET_BLOG,
        payload: data
    };
};

export const deleteBlogAction = data => {
    return {
        type: DELETE_BLOG,
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
            // console.log("THIS IS DECODED", decoded)
        return axios({
            method: "GET",
            url: `http://localhost:3002/users/${decoded.email}`,
            headers: { authorization: `Bearer ${token}` }
        }).then(response => {
            dispatch(setBlog(response.data.data));
        }).catch(error => {
            console.log(error);
        });
    }

};

export const deleteBlog = (id) => dispatch =>{
    // console.log('ID DI REDUX',id)
    const token = localStorage.getItem("token");
    return axios({
        method: "DELETE",
        url: `http://localhost:3002/blog/${id}`,
        headers: { authorization: `Bearer ${token}` }
    }).then(response => {
        console.log('DELETE RESPONSE', response.data);
        dispatch(deleteBlogAction(response.data.data));
        // fetchBlog()
    }).catch(error => {
        console.log(error);
    });
};