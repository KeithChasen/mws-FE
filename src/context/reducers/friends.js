export const friendsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FRIENDS':
      return {
        ...state,
        friends: action.payload
      };
    default:
      return {
        ...state
      }
  }
};
