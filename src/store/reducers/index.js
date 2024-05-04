import {combineReducers} from 'redux'
import { userReducer } from './userReducer'
import { legacy_createStore as createStore } from 'redux';
import { gameReducer } from './gameReducer';


const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
})


export const store = createStore(rootReducer)