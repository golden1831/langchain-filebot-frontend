import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { tokens } from "@/utils/token";

const baseURL = import.meta.env.VITE_SERVER_URL;

export const sendMessage = async (sendData) => {
  setAuthToken(tokens.get());
  try {
    const res = await axios.post(baseURL + `/api/chatbot/chat`, sendData);
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const ChatActive = async (sendData) => {
  setAuthToken(tokens.get());
  try {
    const res = await axios.get(
      baseURL + `/api/chatbot/deactive/${sendData.botId}`
    );
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
