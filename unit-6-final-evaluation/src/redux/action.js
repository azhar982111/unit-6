export const GET_BOOKINGS_LOADING = "GET_BOOKINGS_LOADING";
export const GET_BOOKINGS_SUCCESS = "GET_BOOKINGS_SUCCESS";
export const GET_BOOKINGS_ERROR = "GET_BOOKINGS_ERROR";

export const GET_MOVIES_LOADING = "GET_MOVIES_LOADING";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_ERROR = "GET_MOVIES_ERROR";

export const GET_LOGIN_ISAUTH = "GET_LOGIN_ISAUTH";

export const getBookingLoading = () => ({
  type: GET_BOOKINGS_LOADING
});

export const getBookingSuccess = (data) => ({
  type: GET_BOOKINGS_SUCCESS,
  payload: data
});

export const getBookingError = () => ({
  type: GET_BOOKINGS_ERROR
});

export const getMoviesLoading = () => ({
    type: GET_MOVIES_LOADING
  });
  
  export const getMoviesSuccess = (data) => ({
    type: GET_MOVIES_SUCCESS,
    payload: data
  });
  
  export const getMoviesError = () => ({
    type: GET_MOVIES_ERROR
  });

  export const getLoginIsAuth = () => ({
    type: GET_LOGIN_ISAUTH
  });


export const getBookings = () => (dispatch) => {
  dispatch(getBookingLoading());
  fetch(`http://localhost:8080/moviesBooked`)
    .then((res) => res.json())
    .then((res) => dispatch(getBookingSuccess(res)))
    .catch(() => dispatch(getBookingError()));
};


export const getMovies = () => (dispatch) => {
    dispatch(getMoviesLoading());
    fetch(`http://localhost:8080/movies`)
      .then((res) => res.json())
      .then((res) => dispatch(getMoviesSuccess(res)))
      .catch(() => dispatch(getMoviesError()));
  };

  export const getMoviesbyID = (id) => (dispatch) => {
    dispatch(getMoviesLoading());
    fetch(`http://localhost:8080/movies/${id}`)
      .then((res) => res.json())
      .then((res) => dispatch(getMoviesSuccess(res)))
      .catch(() => dispatch(getMoviesError()));
  };