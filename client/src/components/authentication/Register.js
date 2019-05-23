import React from 'react'
import axios from '../../config/axios'

class UserRegister extends React.Component {
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:"",
            notice:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange (e) {
        e.persist()
        this.setState(()=> ({
            [e.target.name]:e.target.value
        }))
    }
    handleSubmit (e) {
        e.preventDefault()
        const formData = {
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        // console.log(formData)
        axios.post('/users/register',formData)
        .then(response => {
            if(response.data.message){
                this.setState(() => ({
                    notice:response.data.message
                }))
            } else {
                this.setState(() => ({
                    username:"",
                    email:"",
                    password:'',
                    notice:"successfully registered taking you to login screen"
                }))
                setTimeout(() => {
                    this.props.history.push('/users/login')
                }, 2000);
            }
        })
        .catch(err=>console.log(err))
    }
    render(){
        return (
            <div className='modal-dialog modal-sm'>
                <div className='modal-content'>
                    <div className='modal-header  text-white' >
                        <center><h2>Join with us</h2></center>
                    </div>
                {this.state.notice && <p>{this.state.notice}</p>}
                <div className='modal-body'>
                    <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="exampleInputUserName1">
                                    
                                <input type='text' className='form-control' id='exampleInputUserName1' aria-describedby="emailHelp" placeholder="Enter UserName" value={this.state.username} name='username' onChange={this.handleChange}/>
                                </label><br/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">
                                    
                                    <input type='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={this.state.email} name='email'  onChange={this.handleChange}/>
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </label><br/>
                            </div>
                            <div className="form-group">
                                <label htmlFor='exampleInputPassword1'>
                                    
                                    <input type='password' className="form-control" id="exampleInputPassword1" placeholder="Enter Password" value={this.state.password} name='password' onChange={this.handleChange}/>
                                </label> <br/>
                            </div>
                            
                           <center> <input type='submit' className="btn submit-btn"/></center>
                        </form>
                </div>

                </div>
            </div>
        )
    }
} 
export default UserRegister