import {
  SET_AUTH_ERROR,
  SET_AUTH_LOADING,
  SET_AUTH_USER,
} from "../constants/AuthConstants";

export default function AuthReducer(
  state = {
    user: null,
    authLoading: false,
    authError: null,
  },
  action
) {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...state,
        authLoading: false,
        user: action.payload,
      };
    case SET_AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        authLoading: false,
        authError: action.payload,
      };
    default:
      return state;
  }
}
