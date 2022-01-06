export const healthReducer = (state, action) => {
    switch (action.type) {
        case 'SET_HEALTH_DIARY':
            return {
                ...state,
                health:
                    typeof action.payload === 'undefined' ?
                        undefined :
                        typeof action.payload === 'array' ?
                            action.payload :
                            action.payload.getHealthDiary
            }
        default:
            return {
                ...state
            }
    }
}
