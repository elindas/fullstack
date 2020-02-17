import axios from "axios";

export const signup = (values, history) => dispatch =>{
    return axios({
        method: "POST",
        url: "http://localhost:3009/users",
        data: values
    }).then(response => {
        console.log(response.data);
        history.push("/login")
    }).catch(error => {
        console.log(error);
    });
};



