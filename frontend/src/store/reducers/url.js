import {
  CREATE_URL_SUCCESS,
  CREATE_URL_FAIL,
  GET_URL_SUCCESS,
  GET_URL_FAIL,
} from "../actions/types";

const initialState = {
  created: null,
  current: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_URL_SUCCESS:
      return { ...state, created: action.payload };
    case GET_URL_SUCCESS:
      return { ...state, current: action.payload };
    case CREATE_URL_FAIL:
    case GET_URL_FAIL:
      return { ...state, created: null, current: null };
    default:
      return state;
  }
};

export default reducer;
