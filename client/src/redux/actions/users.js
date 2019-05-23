import axios from '../../config/axios'

export const StartLogin = (formData, props) => {
    // console.log('login')
    // console.log(props,'props')
    return(dispatch) => {
        axios.post('/users/login', formData)
        .then(response => {
            axios.defaults.headers['x-auth'] = response.data.token
            localStorage.setItem('token', response.data.token)
            dispatch(addUser(response.data.user))
            props.props.history.push('/dashboard')
        })
        .catch(err=>console.log(err))
    }
}
export const addUser = (user) => {
    return {
        type:'ADD_USER',
        payload:user
    }
}



export const getCurrentUser = () => {
    return (dispatch) => {
        axios.get('/users/account')
        .then(response => {
            dispatch(addUser(response.data))
        })
        .catch(err =>console.log(err))
    }
}



export const StartRemoveUser = (props) => {
    // console.log('logout called')
    return (dispatch) => {
        axios.delete('/users/logout')
        .then( response => {
            //  console.log(response.data)
             dispatch(removeUser())
            localStorage.clear()
            props.props.history.push('/users/login')
        })
        .catch(err => console.log(err))
    }    
}
export const removeUser = () => {
    return {
        type:'REMOVE_USER',
        payload:{}
    }
} 




