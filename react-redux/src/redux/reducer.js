import {
  GET_TODOS_LOADING,
  GET_TODOS_ERROR,
  GET_TODOS_SUCCESS
} from "./action";

const initstate = {
  loading: false,
  error: false,
  todos: []
};

function reducer(state = initstate, { type, payload }) {
  switch (type) {
    case GET_TODOS_LOADING: {
      return {
        loading: true,
        error: false,
        todos: []
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        loading: false,
        error: false,
        todos: payload
      };
    }

    case GET_TODOS_ERROR: {
      return {
        loading: false,
        error: true,
        todos: []
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
