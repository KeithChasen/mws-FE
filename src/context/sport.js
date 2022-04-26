import React, { createContext, useReducer, useContext } from 'react';
import { sportsReducer } from "./reducers/sports";

const SportsStateContext = createContext();
const SportsDispatchContext = createContext();

export const SportsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(sportsReducer, { sports: null });

    return (
        <SportsDispatchContext.Provider value={dispatch}>
            <SportsStateContext.Provider value={state}>
                { children }
            </SportsStateContext.Provider>
        </SportsDispatchContext.Provider>
    );
};

export const useSportsState = () => useContext(SportsStateContext);
export const useSportsDispatch = () => useContext(SportsDispatchContext);
