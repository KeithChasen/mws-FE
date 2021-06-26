import React, { createContext, useReducer, useContext } from 'react';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return {
        ...state,
        users: action.payload
      };
    case 'SET_SELECTED_USER':
      return {
        ...state,
        selectedUser: action.payload
      };
    case 'SET_MESSAGES':
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.userId]: action.payload.messages
        }
      };
    case 'ADD_MESSAGE':
      let chatMessages = state.messages?.[action.payload.userId] ?
        [...state.messages[action.payload.userId]] : [];
      chatMessages.push(action.payload.message);
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.userId]: [
            ...chatMessages
          ]
        }
      };
    default:
      return {
        ...state
      };
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { users: null, messages: null });

  return (
    <UserDispatchContext.Provider value={dispatch}>
      <UserStateContext.Provider value={state}>
        { children }
      </UserStateContext.Provider>
    </UserDispatchContext.Provider>
  );
};

export const useUserState = () => useContext(UserStateContext);
export const useUserDispatch = () => useContext(UserDispatchContext);
