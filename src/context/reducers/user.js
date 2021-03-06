export const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users:
                    typeof action.payload === 'undefined' ?
                        undefined :
                        typeof action.payload === 'array' ?
                            action.payload :
                            action.payload.getUsers
            };
        case 'SET_SELECTED_USER':
            return {
                ...state,
                selectedUser: action.payload
            };
        case 'SET_MESSAGES':
            let userChatMessages = state.chat?.[action.payload.userId]?.messages ?
                [...state.chat[action.payload.userId].messages] : [];

            const newChatMessages = [...action.payload.messages, ...userChatMessages];

            newChatMessages.sort((a, b) => a.createdAt - b.createdAt);

            return {
                ...state,
                chat: {
                    ...state.chat,
                    [action.payload.userId]: {
                        messages: newChatMessages,
                        step: action.payload.step
                    }
                }
            };

        case 'ADD_MESSAGE':
            let chatMessages = state.chat?.[action.payload.userId]?.messages ?
                [...state.chat[action.payload.userId].messages] : [];
            chatMessages.push(action.payload.message);
            return {
                ...state,
                chat: {
                    ...state.chat,
                    [action.payload.userId]: {
                        messages: chatMessages,
                        step: state.chat[action.payload.userId].step
                    }
                }
            };
        default:
            return {
                ...state
            };
    }
};