import {
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  GET_USERS_LOADING
} from "./action";

const initstate = {
  loading: false,
  error: false,
  users: []
};

function reducer(state = initstate, { type, payload }) {
  switch (type) {
    case GET_USERS_LOADING: {
      return {
        loading: true,
        error: false,
        users: []
      };
    }
    case GET_USERS_SUCCESS: {
      return {
        loading: false,
        error: false,
        users: payload
      };
    }

    case GET_USERS_ERROR: {
      return {
        loading: false,
        error: true,
        users: []
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
