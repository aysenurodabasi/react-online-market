import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function productListReducer(state= initialState.categories,action){
  switch (action.type) {
    case actionTypes.GET_PRODUCT_SUCCESS:
      return action.payload;
  
    default:
      return state;
  }
}