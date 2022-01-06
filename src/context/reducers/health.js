export const healthReducer = (state, action) => {
    switch (action.type) {
        case 'SET_HEALTH_DIARY':
            return {
                ...state,
                health: action.payload.getHealthDiary
            }
        default:
            return {
                ...state
            }
    }
}
