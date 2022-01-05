import React, { createContext, useReducer, useContext } from 'react';
import { friendsReducer } from "./reducers/friends";

const FriendsStateContext = createContext();
const FriendsDispatchContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(friendsReducer, { friends: null });

  return (
    <FriendsDispatchContext.Provider value={dispatch}>
      <FriendsStateContext.Provider value={state}>
        { children }
      </FriendsStateContext.Provider>
    </FriendsDispatchContext.Provider>
  );
};

export const useFriendsState = () => useContext(FriendsStateContext);
export const useFriendsDispatch = () => useContext(FriendsDispatchContext);