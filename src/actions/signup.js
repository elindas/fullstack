import axios from "axios";

export const SET_SIGNUP = "SET_SIGNUP";

export const setSignup = data => {
    return {
        type: SET_SIGNUP,
        payload: data
    };
};

export const signup = (values, history) => dispatch =>{
    return axios({
        method: "POST",
        url: "http://localhost:3001/users",
        data: values
    }).then(response => {
        console.log("this is response data signup", response.data);
        dispatch(setSignup(response.data.data));
        history.push("/login")
    }).catch(error => {
        console.log(error);
    });
};



