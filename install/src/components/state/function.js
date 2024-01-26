function globalReducerFunction(state, payload) {
    switch (payload.type) {
        case "CHANGE_LANG":
            return { ...state, currentLanguage: payload.currentLanguage }
        case "increment":
            return { ...state, count: state.count + 1 }
        case "decrement":
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}


export {
    globalReducerFunction
}