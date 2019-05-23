const locationsIntialState =[]
const locationsReducers = (state = locationsIntialState, action) => {
    switch ( action.type ) {
        case "SET_LOCATIONS" :
            return [...action.payload]
        default :
            return [...state]
    }
}
export default locationsReducers