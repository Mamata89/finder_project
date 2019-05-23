import React from 'react'
import { connect } from 'react-redux'
import { StartRemoveUser } from '../../redux/actions/users'

class UserLogout extends React.Component {
    constructor(props){
        super(props)
        this.state={
            token:localStorage.getItem('token'),
            notice:'',
            redirect:false
        }
    }
    componentDidMount(){
    this.props.dispatch(StartRemoveUser()) 
     console.log(this.props.user.username) 
     this.props.history.push('/users/login')
    }

    render (){
         console.log(this.props,'logout comp')
        return(
            <div>
                <h2>....Logout successfully</h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return {
       user :state.user
   }    
}
export default connect(mapStateToProps)(UserLogout)