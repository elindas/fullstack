import axios from "axios";

export const SET_TODOS = "SET_TODOS";
export const GET_BY_ID_BLOG = "GET_BY_ID_BLOG";

export const setTodo = data => {
  return {
    type: SET_TODOS,
    payload: data
  };
};

export const getDetailBlog = data => {
  return {
    type: GET_BY_ID_BLOG,
    payload: data
  };
};

export const fetchTodos = () => dispatch => {
  return axios({
    method: "GET",
    url: "http://localhost:3002/blog"
  })
    .then(response => {
      dispatch(setTodo(response.data.data));
    })
    .catch(error => {
      console.log(error);
    });
};

export const showBlogById = id => (dispatch) => {
  

 
    return axios({
      method: "GET",
      url: `http://localhost:3002/blog/detail/${id}`,
      
    })
      .then(res => {
        dispatch(getDetailBlog(res.data.data));
      })
      .catch(err => {
        console.log(err);
      });
  
};
