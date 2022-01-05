export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            };
        case 'LOGOUT':
            return {};
        case 'UPDATE_ACCOUNT':
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
};