export const healthReducer = (state, action) => {
    switch (action.type) {
        case 'SET_HEALTH_DIARY':
            const health = typeof action.payload === 'undefined' ?
                undefined :
                typeof action.payload === 'array' ?
                    action.payload :
                    action.payload.getHealthDiary;

            health && health.sort((a,b) => new Date(a.date) - new Date(b.date));

            return {
                ...state,
                health
            }
        default:
            return {
                ...state
            }
    }
}
