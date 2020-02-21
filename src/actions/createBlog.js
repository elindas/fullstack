import axios from "axios";
import jwt from "jsonwebtoken"

export const CREATE_BLOG = "CREATE_BLOG";

export const createBlog = data => {
    return {
        type: CREATE_BLOG,
        payload:data
    };
};


export const postDataBlog = (values, history) => (dispatch, getState) => {
    const { users } = getState();

    if (users.isLogin === true) {
        const token = localStorage.getItem("token");

        let decoded=jwt.verify(token, 'SECRET', function(err, decoded) {
            return decoded
          });

          console.log(decoded);
          

        return axios({
            method: "POST",
            url: "http://localhost:3002/blog",
            data: {...values,user:decoded.id},
            headers: { authorization: `Bearer ${token}` }

        }).then(response => {
            console.log("this is response Create Blog", response.data);
            
            dispatch(createBlog(response.data.data))
            history.push("/userblog")
        }).catch(error => {
            console.log(error);
        });

        
    }
};
