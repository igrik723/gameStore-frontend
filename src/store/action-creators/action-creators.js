import { ADD_GAME, SELECT_PUBLISHER, SELECT_TYPE } from "../reducers/gameReducer";
import { ADD_MONEY, GET_INFO, UPDATE_BALANCE, USER_AUTH, USER_OUT } from "../reducers/userReducer";
import { ADD_TYPE } from "../reducers/gameReducer";
import { ADD_PUBLISHER } from "../reducers/gameReducer";

export const selectTypeAction = (payload) => ({type: SELECT_TYPE, payload})
export const selectPublisherAction = (payload) => ({ type: SELECT_PUBLISHER, payload })
export const addTypeAction = (payload) => ({type: ADD_TYPE, payload})
export const addPublisherAction = (payload) => ({type: ADD_PUBLISHER, payload})
export const addGameAction = (payload) => ({ type: ADD_GAME, payload })
export const userAuthAction = (payload) => ({ type: USER_AUTH, payload})
export const userOutAction = () => ({ type: USER_OUT })
export const updateBalanceAction = (payload) => ({type: UPDATE_BALANCE, payload})