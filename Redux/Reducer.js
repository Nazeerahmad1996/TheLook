const isLoggedin = (state = {
    loggedIn: false,
}, action) => {
    switch (action.type) {
        case 'logged':
            return { ...state, loggedIn: action.loggedIn }
        default:
            return state;
    }
    // return state
}

export default isLoggedin