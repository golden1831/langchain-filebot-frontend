import { SET_CURRENT_PRICING } from "./actiontypes";
import axios from "axios";

const baseURL = import.meta.env.VITE_SERVER_URL;

export const getPricing = async () => {
  try {
    const res = axios.get(baseURL + "/api/pricing/list");

    // dispatch({
    //   type: SET_CURRENT_PRICING,
    //   payload: res.data,
    // });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createSubscription = async (data) => {
  // setAuthToken(tokens.get());
  try {
    const res = await axios.post(baseURL + "/api/pricing/subscription", {
      price_id: data.stripeId,
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
