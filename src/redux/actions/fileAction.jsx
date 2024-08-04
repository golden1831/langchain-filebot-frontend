import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import { tokens } from "@/utils/token";

const baseURL = import.meta.env.VITE_SERVER_URL;

export const fileUpload = async (data) => {
  setAuthToken(tokens.get());
  try {
    const res = await axios({
      method: "post",
      url: baseURL + `/api/embed_file/upload/${data.chatbot_id}`,
      data: data.formData,
      headers: { "Content-Type": "multipart/form-data" },
      timeout: 1000000,
    });

    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const fileDelete = async (data) => {
  setAuthToken(tokens.get());
  try {
    const res = await axios.post(baseURL + "/api/embed_file/delete", {
      file: data.file,
      bot: data.bot,
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};
