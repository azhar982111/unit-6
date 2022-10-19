export const GET_USERS_LOADING = "GET_USERS_LOADING";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const getUserLoading = () => ({
  type: GET_USERS_LOADING
});

export const getUserSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data
});

export const getUserError = () => ({
  type: GET_USERS_ERROR
});


export const getUsers = (id="") => (dispatch) => {
  dispatch(getUserLoading());
  fetch(`https://reqres.in/api/users/${id}`)
    .then((res) => res.json())
    .then((res) => dispatch(getUserSuccess(res.data)))
    .catch(() => dispatch(getUserError()));
};