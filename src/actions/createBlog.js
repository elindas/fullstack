import axios from "axios";

export const postData = values => (dispatch, getState) => {
    const { users } = getState();

    if (users.isLogin === true) {
        const token = localStorage.getItem("token");

        return axios({
            method: "POST",
            url: "http://localhost:3009/todos",
            data: values,
            headers: { authorization: `Bearer ${token}` }

        }).then(response => {
            console.log(response.data);
            
        }).catch(error => {
            console.log(error);
        });
    }
};
