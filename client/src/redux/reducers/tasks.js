const tasksIntialState = []
const tasksReducers = (state = tasksIntialState, action ) => {
    switch (action.type) {
        case 'ADD_TASK' :
            return [...state, action.payload]
        case 'GET_TASKS':
            return [...action.payload]
        case 'EDIT_TASK' :
            return state.map(client => {
                if(client.id===action.payload.id){
                    return {...client,...action.payload}
                } else {
                    return{...client}
                }
            })
        case 'REMOVE_TASK' :
            return state.filter(task =>!task._id == action.payload)
        default :
            return [...state]
    }
}
export default tasksReducers