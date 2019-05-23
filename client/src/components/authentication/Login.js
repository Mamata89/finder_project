import React from 'react'
import { connect } from 'react-redux'
import { StartLogin } from '../../redux/actions/users';


class UserLogin extends React.Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            notice:'',

        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        e.persist()
        this.setState(()=> ({
            [e.target.name]:e.target.value
        }))
    }
    handleSubmit(e){
        e.preventDefault()
        const formData={
            email:this.state.email,
            password:this.state.password
        }
        this.props.dispatch(StartLogin(formData, this.props))
        // this.props.handleIsAuthenticated(true)
        // this.props.props.history.push('/')

    }
    
    render(){
    //    console.log(this.props.users.username)
    //    console.log(this.props)
        return (
            <div className='modal-dialog modal-sm'>
                <div className='modal-content'>
                <div className='modal-header text-white'>
                   <h2>Login</h2>
                </div>
                <div className='modal-body' >
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">
                                
                                <input type='email' value={this.state.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" name='email' onChange={this.handleChange}/>
                            </label><br/>
                        </div>
                        <div className="form-group">
                            <label htmlFor='exampleInputPassword1'>
                                
                                <input type='password' value={this.state.password} className="form-control" id="exampleInputPassword1" aria-describedby="emailHelp" placeholder="Enter Password" name='password' onChange={this.handleChange}/>
                            </label> <br/>
                        </div>
                        <center><input type='submit' className="btn submit-btn" /></center>
                    </form>
                </div>
                </div>

            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        users:state.user
    }
}
export default connect(mapStateToProps)(UserLogin)