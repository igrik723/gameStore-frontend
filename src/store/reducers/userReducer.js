const defaultState = {
    auth: false,
    role: 'USER',
    balance: 0,
}

export const USER_AUTH = 'USER_AUTH'
export const USER_OUT = 'USER_OUT'
export const UPDATE_BALANCE = 'UPDATE_BALANCE'

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_AUTH:
            return { ...state, auth: true, role: action.payload, }
        case USER_OUT:
            return { ...state, auth: false }
        case UPDATE_BALANCE:
            return {...state, balance: action.payload}
        default: return state
    }
}