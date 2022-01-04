export const friendsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FRIENDS':
      return {
        ...state,
        friends: typeof action.payload === 'array' ? action.payload : action.payload.getFriends
      };
    case 'UPDATE_FRIENDS':
      return {
        ...state,
        friends: [...state.friends.filter(friend => friend.id !== action.payload.id), action.payload]
      }
    case 'DELETE_FRIEND':
      return {
        ...state,
        friends: [...state.friends.filter(friend => friend.id !== action.payload.id)]
      }
    default:
      return {
        ...state
      }
  }
};
