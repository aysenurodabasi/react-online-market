import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function categoryListReducer(state= initialState.categories,action){
  switch (action.type) {
    case actionTypes.GET_CATEGORY_SUCCESS:
      return action.payload;
  
    default:
      return state;
  }
}