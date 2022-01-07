import React, { createContext, useReducer, useContext } from 'react';
import { healthReducer } from "./reducers/health";

const HealthStateContext = createContext();
const HealthDispatchContext = createContext();

export const HealthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(healthReducer, { health: null });

    return (
        <HealthDispatchContext.Provider value={dispatch}>
            <HealthStateContext.Provider value={state}>
                { children }
            </HealthStateContext.Provider>
        </HealthDispatchContext.Provider>
    );
};

export const useHealthState = () => useContext(HealthStateContext);
export const useHealthDispatch = () => useContext(HealthDispatchContext);
