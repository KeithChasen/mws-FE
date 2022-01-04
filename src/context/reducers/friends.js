export const friendsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FRIENDS':
      return {
        ...state,
        friends: typeof action.payload === 'array' ? action.payload : action.payload.getFriends
      };
    default:
      return {
        ...state
      }
  }
};
