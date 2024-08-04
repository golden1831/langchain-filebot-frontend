import { tokens } from "./token";
import jwtDecode from "jwt-decode";

export const TokenDecode = () => {
	if (tokens.get()) {
		return jwtDecode(tokens.get());
	} else {
		return {};
	}
};

export default TokenDecode;