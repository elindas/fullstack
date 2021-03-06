import axios from "axios";

export const SET_LOGIN = "SET_LOGIN";

export const setLogin = data => {
  return {
    type: SET_LOGIN,
    payload: data
  };
};

export const isLogin = () => dispatch => {
  const token = localStorage.getItem("token");
  console.log("TERPANGGIL", token);
  if (token) {
    dispatch(
      setLogin({
        isLogin: true
      })
    );
  } else {
    dispatch(setLogin({ isLogin: false }));
  }
};

export const logout = () => dispatch => {
    
    const signOut = () => {
      // eslint-disable-next-line
        const token = localStorage.removeItem("token");
    };
 
  dispatch(
    setLogin({
      isLogin: false
    }),
    signOut()
  );
};

export const login = (values, history) => dispatch => {
  return axios({
    method: "POST",
    url: "http://localhost:3002/users/login",
    data: values
  }).then(response => {
    if (response.status === 200) {
      console.log("token", response.data.token);
      localStorage.setItem("token", response.data.token);
      // localStorage.setItem("email", values.email)

      dispatch(isLogin());
      history.push("/userblog");
    }
  });
};
