import axios from '../../config/axios'

export const StartTask = (formData, props) => {
    // console.log("StartTask")
    console.log(props,'in startTask')
    return (dispatch) => {
        axios.post('/tasks',formData)
        .then(response => {
            if(response.data.errors){
                window.message('feilds cannot be empty')
            } else {
                console.log(response.data,'response data in task action')
                dispatch(addTask(response.data))
                props.history.push('/my-tasks')
            }
        })
        .catch(err => console.log(err))
    }
}

export const StartGetTasks = () => {
    // console.log("startgettask")
    return (dispatch) => {
        axios.get('/tasks')
        .then(response => {
            // console.log(response.data)
            dispatch(getTasks(response.data))
        })
        .catch(err=>console.log(err))
    }
}
export const StartEditTask = (formData,props) => {
    // console.log(formData)
    console.log('props in Startedit',props)
    return (dispatch) => {
        axios.put(`/tasks/${props}` , formData)
        .then(response => {
            console.log(response.data,'response.data  Startedit')
            dispatch(editTask(response.data))
        })
        .catch(err => console.log(err))
    }
}

export const StartRemoveTask = (props,history) => {
    // console.log(props,"props in startremove")
    // console.log(history,'history in startremove')
    return (dispatch) => {
        axios.delete(`/tasks/${props}`)
        .then(response => {
            console.log(response.data)
            dispatch(removeTask(response.data._id))
            history.history.push('/my-tasks')

        })
        .catch(err=>console.log(err))
    }
}

export const addTask = (task) => {
    return {
        type:'ADD_TASK',
        payload:task
    }
}
export const editTask =( task ) => {
    return {
        type:"EDIT_TASK",
        payload:task
    }
}

export const removeTask = (id) => {
    return {
        type:"REMOVE_TASK",
        payload:id
    }
}


export const getTasks = (tasks) => {
    //console.log("getTask")
    return {
        type:'GET_TASKS',
        payload:tasks
    }
}