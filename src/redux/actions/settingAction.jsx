import { SET_CURRENT_SETTING, UPDATE_CURRENT_SETTING } from "./actiontypes";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { tokens } from "@/utils/token";

const baseURL = import.meta.env.VITE_SERVER_URL;

export const getSetting = (setData) => async (dispatch) => {
  setAuthToken(tokens.get());
  try {
    const res = await axios.post(baseURL + `/api/bot_settings/`, setData);
    dispatch({
      type: SET_CURRENT_SETTING,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const findSetting = (setData) => async (dispatch) => {
  setAuthToken(tokens.get());
  try {
    const res = await axios.get(baseURL + `/api/bot_settings/${setData.id}`);
    // dispatch({
    //     type: SET_CURRENT_SETTING,
    //     payload: res.data
    // });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addSetting = (setData) => async (dispatch) => {
  setAuthToken(tokens.get());
  try {
    const res = await axios.post(baseURL + "/api/bot_settings/add", setData);
    // dispatch({
    //   type: UPDATE_CURRENT_SETTING,
    //   payload: {}
    // });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateSetting = (setData) => async (dispatch) => {
  setAuthToken(tokens.get());
  try {
    const res = await axios.put(
      baseURL + `/api/bot_settings/${setData.id}`,
      setData
    );
    // dispatch({
    //   type: UPDATE_CURRENT_SETTING,
    //   payload: {}
    // });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteSetting = (setData) => async (dispatch) => {
  setAuthToken(tokens.get());
  try {
    const res = await axios.delete(baseURL + `/api/bot_settings/${setData.id}`);
    // dispatch({
    //   type: UPDATE_CURRENT_SETTING,
    //   payload: {}
    // });.
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
