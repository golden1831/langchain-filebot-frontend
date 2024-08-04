import { SET_CURRENT_USER } from "./actiontypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import setAuthToken from "../../utils/setAuthToken";
import { ACCESS_TOKEN_NAME } from "@/config/serverConfig";
import { tokens } from "@/utils/token";

const baseURL = import.meta.env.VITE_SERVER_URL;

export const registerUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(baseURL + "/api/users/register", userData);
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data,
    });
    return Promise.resolve({ status: res.status });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(baseURL + "/api/users/login", userData);

    console.log(res.data);
    const { token } = res.data;
    tokens.set(token);
    console.log(res.data.user);

    const decoded = jwt_decode(token);
    // localStorage.setItem("user", JSON.stringify(decoded))

    // Set token to Auth header
    setAuthToken(token);
    // Decode token to get user data

    console.log(decoded);
    // const navigate = useNavigate();
    dispatch(setCurrentUser(res.data));
    // useNavigate("/home");
    return Promise.resolve({ status: res.status });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

export const fortgotPassword = (userData) => async (dispatch) => {
  try {
    const res = await axios.post(
      baseURL + "/api/users/forgot_password",
      userData
    );
    // dispatch({
    //     type: SET_CURRENT_USER,
    //     payload: res.data
    // });
    return Promise.resolve({ status: res.status });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.clear();
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
