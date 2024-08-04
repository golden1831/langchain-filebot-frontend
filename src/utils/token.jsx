import { ACCESS_TOKEN_NAME } from "@/config/serverConfig";
import { getCookie, setCookie, deleteCookie } from "./cookie";

export const tokens = {
    get: () => {
        return getCookie(ACCESS_TOKEN_NAME);
    },
    set: (token) => {
      return setCookie(ACCESS_TOKEN_NAME, token);
    },
    remove: () => {
      return deleteCookie(ACCESS_TOKEN_NAME);
    },
};