const userIntialState = {}

const usersReducers = (state = userIntialState, action ) => {
    switch(action.type) {
        case "ADD_USER" :
            return {...action.payload}
        case "REMOVE_USER" :
            return {...action.payload}
        default :
            return {...state}
    }
}

export default usersReducers