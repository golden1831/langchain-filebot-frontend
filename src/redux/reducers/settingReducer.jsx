import { SET_CURRENT_SETTING } from '../actions/actiontypes';
import { UPDATE_CURRENT_SETTING } from '../actions/actiontypes';
import isEmpty from "is-empty";

const initialState = {
	settings: [],
	flag: false
};

export default function(state = initialState, action) {
  switch (action.type){
    case SET_CURRENT_SETTING :
			return {
				...state,
				settings:action.payload
			};
    case UPDATE_CURRENT_SETTING :
			return {
				...state,
				flag: true
			};

    default:
    return state;
  }
}