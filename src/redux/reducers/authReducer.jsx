import { SET_CURRENT_USER } from '../actions/actiontypes';
import isEmpty from "is-empty";
import { tokens } from '@/utils/token';

const initialState = {
	isAuthenticated: false,
	user:{},
	// pricing: {}
};

export default function(state = initialState, action) {
  switch (action.type){
    case SET_CURRENT_USER :
        return {
            ...state,
            isAuthenticated: !!!tokens.get(),
            user:action.payload.user,
            // pricing: action.payload.pricing
        };
    default:
    return state;
  }
}