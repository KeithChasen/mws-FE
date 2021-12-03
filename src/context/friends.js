import React, { createContext, useReducer, useContext } from 'react';

const FriendsStateContext = createContext();
const FriendsDispatchContext = createContext();

const friendsReducer = (state, action) => {

};

export const FriendsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(friendsReducer, { friends: null });

  return (
    <FriendsDispatchContext.Provider value={dispatch}>
      <FriendsStateContext.Provider value={state}>

      </FriendsStateContext.Provider>
    </FriendsDispatchContext.Provider>
  );
};

export const useFriendsState = () => useContext(FriendsStateContext);
export const useFriendsDispatch = () => useContext(FriendsDispatchContext);