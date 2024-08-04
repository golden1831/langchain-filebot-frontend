import { SET_CURRENT_USER } from "./actiontypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import setAuthToken from "../../utils/setAuthToken";
import { tokens } from "@/utils/token";

const baseURL = import.meta.env.VITE_SERVER_URL;

export const getCurrentUser = () => async (dispatch) => {
  const data = jwt_decode(tokens.get());
  try {
    const res = await axios.get(baseURL + `/api/user/${data.id}`);
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.data,
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateUser = (userData) => async (dispatch) => {
  const data = jwt_decode(tokens.get());
  try {
    const res = await axios.put(
      baseURL + `/api/user/profile/${data.id}`,
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
