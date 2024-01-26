import { createContext } from "react";

const initialState = { 
    currentLanguage: 'ru',
    count: 0,
}

const globalContenxt = createContext(initialState)

export {
    initialState,
    globalContenxt
}