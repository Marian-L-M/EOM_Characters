//quasi constructor
const initialState = {
    currentUser: null
}

// Setting state to initial state if no state is passed along in function
// Actions calling database fetching data, send to reducer, update state
export const user = (state = initialState, action) => {
    return {
        ...state,
        currentUser: action.currentUser
    }
}