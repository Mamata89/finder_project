import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { StartGetTasks } from '../../redux/actions/tasks'

class TaskList extends React.Component {
    componentDidMount () {
        this.props.dispatch(StartGetTasks())
    }
    render(){
        // console.log(this.props,'pros in List.js')
        return (
            <div>
                <h1>My Tasks</h1>
               {
                   this.props.tasks.length === 0 ? <p>no tasks found </p> :(
                       <div>
                            { this.props.tasks.map(task => {
                                return (
                                <div key={task._id}>
                                    <Link to={`/tasks/${task._id}`}><h3>{task.title}</h3></Link>
                                </div>
                                )
                            })}
                       </div>
                   )
               }
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    // console.log(state,'state')
    return {
        tasks:state.tasks
    }
}

export default connect(mapStateToProps)(TaskList)