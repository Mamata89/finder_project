const categoriesIntialState = []
const categoriesReducers = (state = categoriesIntialState,action ) => {
    switch(action.type) {
        case "SET_CATEGORIES" :
            return [...action.payload]
        default :
            return [...state]
    }
}
export default categoriesReducers