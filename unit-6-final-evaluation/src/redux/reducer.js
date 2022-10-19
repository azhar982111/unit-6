import {
    GET_BOOKINGS_ERROR,
    GET_BOOKINGS_SUCCESS,
    GET_BOOKINGS_LOADING,
    GET_MOVIES_ERROR,
    GET_MOVIES_SUCCESS,
    GET_MOVIES_LOADING,
    GET_LOGIN_ISAUTH
} from "./action";

const initstate = {
    loading: false,
    error: false,
    isAuth: false,
    movies: [],
    bookedMovies: []
};

function reducer(state = initstate, { type, payload }) {
    switch (type) {
        case GET_BOOKINGS_LOADING: {
            return {
                loading: true,
                error: false,
                isAuth: true,
                movies: [],
                bookedMovies: []
            };
        }
        case GET_BOOKINGS_SUCCESS: {
            return {
                loading: false,
                error: false,
                isAuth: true,
                movies: [],
                bookedMovies: payload
            };
        }

        case GET_BOOKINGS_ERROR: {
            return {
                loading: true,
                error: true,
                isAuth: true,
                movies: [],
                bookedMovies: []
            };
        }

        case GET_MOVIES_LOADING: {
            return {
                loading: true,
                error: false,
                isAuth: true,
                movies: [],
                bookedMovies: []
            };
        }
        case GET_MOVIES_SUCCESS: {
            return {
                loading: false,
                error: false,
                isAuth: true,
                movies: payload,
                bookedMovies: []
            };
        }

        case GET_MOVIES_ERROR: {
            return {
                loading: false,
                error: true,
                isAuth: true,
                movies: [],
                bookedMovies: []
            };
        }

        case GET_LOGIN_ISAUTH: {
            return {
                loading: false,
                error: false,
                isAuth: true,
                movies: [],
                bookedMovies: []
            };
        }

        default: {
            return state;
        }
    }
}

export default reducer;
