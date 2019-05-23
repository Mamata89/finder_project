import React from 'react'
import { connect } from 'react-redux'

const UserProfile = (props) => {
    // console.log(props,'props in profile')
    return (
        <div>
            <h2>Profile Details</h2>
            <h3>UserName : {props.user.username}</h3>
            <p>emailId :{props.user.email}</p>
        </div>
    )
}
const mapStateToprops = (state) => {
    // console.log(state,'state in profile')
    return {
        user:state.user
    }
}
export default connect(mapStateToprops)(UserProfile)