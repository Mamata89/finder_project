import React from 'react'
import { Link } from 'react-router-dom'
import { StartCategories } from '../../redux/actions/categories';
import { connect } from "react-redux";

class Dashboard extends React.Component {
    componentDidMount(){
        this.props.dispatch(StartCategories())
    }
    render(){
        // console.log(this.props,'in dashboard')
        return(
            <div className="reg-form">
                <h2>Dashboard</h2>
                <Link to='/user/account'> || My Profile ||</Link>
                <Link to='/post-task'> Post Task ||</Link>
                <Link to='/my-tasks'>My Tasks</Link>
                {this.props.categories.map( category => {
                    return (
                        <div key={category._id}>
                           <Link to='/post-task'><h3> {category.name} </h3></Link>
                        </div>
                    )
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        categories:state.categories
    }
}
export default connect(mapStateToProps)(Dashboard)