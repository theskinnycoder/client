import { createContext, useEffect, useReducer } from "react";
import { BASE_SERVER_URL } from "../constants";
import { SET_AUTH_USER } from "../constants/AuthConstants";
import AuthReducer from "../reducers/AuthReducer";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
    authLoading: false,
    authError: null,
  });

  useEffect(() => {
    (async () => {
      const response = await fetch(`${BASE_SERVER_URL}/api/auth/me`, {
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: SET_AUTH_USER, payload: data.user });
      } else {
        dispatch({ type: SET_AUTH_USER, payload: null });
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
