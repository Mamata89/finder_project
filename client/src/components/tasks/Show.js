import React from 'react'
import { connect } from 'react-redux'
import {StartRemoveTask } from '../../redux/actions/tasks'
import { Link } from 'react-router-dom'

class TaskShow extends React.Component {
    
    render(){
        // console.log(this.props,'in show.js')
        if(!this.props.task) {
            return <> </>
        }
        return(
            <div>
                <p>Title - {this.props.task.title}</p>
                <p>Description - {this.props.task.description}</p>
                <p>Budget - {this.props.task.budget}</p>
                <p>Catergory - {this.props.task.category && ( this.props.task.category.name ) } </p>
                <p>Location - {this.props.task.location && (this.props.task.location.location)}</p>
                <p>{this.props.task.dueDate}</p>
                <button onClick={ () => {
                    const confirmDelete=window.confirm('Are you sure ?')
                    if(confirmDelete) {
                        this.props.dispatch(StartRemoveTask(this.props.task._id,this.props))
                    }
                }}>Delete</button>
                <Link to={`/tasks/edit/${this.props.task._id}`}> Edit </Link>

            </div>
        )
    }
}
const mapStateToProps = (state,props) => {
    const id=props.match.params.id
    return {
        task:state.tasks.find(task => task._id == id)
    }
}  
export default connect(mapStateToProps)(TaskShow)