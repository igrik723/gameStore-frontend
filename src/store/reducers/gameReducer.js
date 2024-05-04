const defaultSate = {
    games: [],
    types: [],
    publishers: [],
    selectedType: {},
    selectedPublisher: {}
}

export const SELECT_TYPE = 'SELECT_TYPE'
export const SELECT_PUBLISHER = 'SELECT_PUBLISHER'
export const ADD_TYPE = 'ADD_TYPE'
export const ADD_PUBLISHER = 'ADD_PUBLISHER'
export const ADD_GAME = 'ADD_GAME'


export const gameReducer = (state = defaultSate, action) => {
    switch (action.type) {
        case SELECT_TYPE:
            return { ...state, selectedType: action.payload}
        case SELECT_PUBLISHER:
            return { ...state, selectedPublisher: action.payload}
        case ADD_TYPE:
            return {...state, types:[ ...action.payload]}
        case ADD_PUBLISHER:
            return {...state, publishers:[...action.payload]}
        case ADD_GAME:
            return {...state, games:[...action.payload]}
        default: 
            return state
    }
}

