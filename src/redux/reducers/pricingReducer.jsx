import { SET_CURRENT_PRICING } from '../actions/actiontypes';
import isEmpty from "is-empty";

const initialState = {
 pricing: {}
};

export default function(state = initialState,action) {
  switch (action.type){
    case SET_CURRENT_PRICING :
        return {
            ...state,
            user:action.payload
        };

    default:
    return state;
  }
}