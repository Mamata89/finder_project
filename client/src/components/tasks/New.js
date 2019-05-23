import React from 'react'
import TaskForm from './Form'
import { connect } from 'react-redux'
import { StartTask } from '../../redux/actions/tasks';


class  TaskPost extends React.Component {
    handleSubmit =(formData) => {
        // console.log(formData,'in new.js')
        this.props.dispatch(StartTask(formData,this.props))
    }
    render(){
        // console.log(this.props,'props in new.js')
        return(
            <div>
                <h2>Post Task </h2>
                <TaskForm handleSubmit={this.handleSubmit} props={this.props}/>
            </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    return {
        tasks:state.tasks
    }
}

export default connect(mapStateToProps)(TaskPost)