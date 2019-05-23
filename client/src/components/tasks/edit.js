import React from "react"
import { connect } from 'react-redux'
import TaskForm from '../tasks/Form'
import { StartEditTask } from "../../redux/actions/tasks";


const TaskEdit =(props) => {
    const handleSubmit = (formData) => {
        // console.log(formData,'fordata in edit')
        props.dispatch(StartEditTask(formData,props.task._id))
    }
    return(
        <div>
            <TaskForm handleSubmit = {handleSubmit} task = {props.task} />
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id
    return {
        task:state.tasks.find(task => task._id == id)
    }

}
export default connect(mapStateToProps)(TaskEdit)