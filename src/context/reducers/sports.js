export const sportsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SPORTS':
            const sports = typeof action.payload === 'undefined' ?
                undefined :
                typeof action.payload === 'array' ?
                    action.payload :
                    action.payload.getSports;

            sports && sports.sort((a,b) => new Date(a.date) - new Date(b.date));

            return {
                ...state,
                sports
            }
        default:
            return {
                ...state
            }
    }
}
