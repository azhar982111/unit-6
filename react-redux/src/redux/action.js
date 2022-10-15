export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

export const getTodosLoading = () => ({
  type: GET_TODOS_LOADING
});

export const getTodosSuccess = (data) => ({
  type: GET_TODOS_SUCCESS,
  payload: data
});

export const getTodosError = () => ({
  type: GET_TODOS_ERROR
});
