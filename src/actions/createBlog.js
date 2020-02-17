import Axios from "axios";


export const postData = values => dispatch => {
    return Axios.post("http://localhost:3009/todos", values)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });
};
    