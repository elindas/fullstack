import axios from "axios";
import jwt from "jsonwebtoken"

export const UPDATE_BLOG = "UPDATE_BLOG";

export const updBlog = data => {
    return {
        type: UPDATE_BLOG,
        payload:data
    };
};

export const updateBlog = (id, values, history) => (dispatch, getState) => {
    const { users } = getState();

    if (users.isLogin === true) {
        const token = localStorage.getItem("token");

        let decoded=jwt.verify(token, 'SECRET', function(err, decoded) {
            return decoded
          });

          console.log("DECODED", decoded);
          

        return axios({
            method: "PUT",
            url: `http://localhost:3002/blog/${id}`,
            data: {...values,user:decoded.id},
            headers: { authorization: `Bearer ${token}` }
            
        }).then(response => {
            console.log("this is response action Update Blog", response.data.data);
            
            dispatch(updBlog(response.data.data))

            history.push("/userblog")

        }).catch(error => {
            console.log(error);
        });
    }
};
