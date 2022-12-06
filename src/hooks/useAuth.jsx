import { useContext } from "react";
import { BASE_SERVER_URL } from "../constants";
import {
  SET_AUTH_ERROR,
  SET_AUTH_LOADING,
  SET_AUTH_USER,
} from "../constants/AuthConstants";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuth() {
  const { state, dispatch } = useContext(AuthContext);

  async function register({ username, email, password }) {
    dispatch({ type: SET_AUTH_LOADING });
    try {
      const response = await fetch(`${BASE_SERVER_URL}/api/auth/register`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({ type: SET_AUTH_ERROR, payload: data?.error });
      } else {
        dispatch({ type: SET_AUTH_USER, payload: data?.user });
      }
    } catch (error) {
      dispatch({ type: SET_AUTH_ERROR, payload: error });
    }
  }

  async function login({ email, password }) {
    dispatch({ type: SET_AUTH_LOADING });
    try {
      const response = await fetch(`${BASE_SERVER_URL}/api/auth/login`, {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({ type: SET_AUTH_ERROR, payload: data?.error });
      } else {
        dispatch({ type: SET_AUTH_USER, payload: data?.user });
      }
    } catch (error) {
      dispatch({ type: SET_AUTH_ERROR, payload: error });
    }
  }

  async function logout() {
    dispatch({ type: SET_AUTH_LOADING });
    try {
      const response = await fetch(`${BASE_SERVER_URL}/api/auth/logout`, {
        credentials: "include",
        method: "POST",
      });
      const data = await response.json();
      if (!response.ok) {
        dispatch({ type: SET_AUTH_ERROR, payload: data?.error });
      } else {
        dispatch({ type: SET_AUTH_USER, payload: null });
      }
    } catch (error) {
      dispatch({ type: SET_AUTH_ERROR, payload: error });
    } finally {
      dispatch({ type: SET_AUTH_LOADING, payload: false });
    }
  }

  return {
    user: state?.user ?? null,
    authLoading: state?.authLoading ?? false,
    register,
    login,
    logout,
  };
}
