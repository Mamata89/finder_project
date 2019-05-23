import React from 'react';
import './App.css'
import { BrowserRouter, Route, Link ,Switch} from 'react-router-dom'
import { connect } from 'react-redux'


import UserRegister from './components/authentication/Register'
import UserLogin from './components/authentication/Login'
import UserLogout from './components/authentication/Logout'
import UserProfile from './components/layout/Profile'

import Dashboard from './components/layout/Dashboard';
import TaskPost from './components/tasks/New';
import TaskList from './components/tasks/List';
import TaskShow from './components/tasks/Show'

import AboutUs from './components/layout/AboutUs'
import Header from './components/layout/header'
import Home from './components/layout/Home'
import TaskEdit from './components/tasks/edit'
class App extends React.Component {
  
  render(){
    // console.log(this.props,'props in app.js')
    return (
      <BrowserRouter>
      <section>
          <div >

      
      
              {/* <Route path='/' component={Header} exact={true}/> */}
              <Header/>
           
              <Route path='/header'component={Header} exact={true}/>
               <Route path='/' component={Home} exact={true}/> 
              <Route path='/dashboard'component={Dashboard} exact={true}/>
         
              <Route path='/aboutus'component={AboutUs} exact={true}/>
              <Route path='/users/register' component={UserRegister} exact={true}/>
              <Route path='/users/login' render={ (props) => <UserLogin props = {props} />}/>
              <Route path='/users/logout' component={UserLogout} exact={true}/>
              <Route path='/user/account' component={UserProfile} />
              <Route path='/post-task' component={TaskPost}/>
              <Route path='/my-tasks' component={TaskList}/>
              <Route path='/tasks/:id' component={TaskShow} exact={true}/>
              <Route path='/tasks/edit/:id' component={TaskEdit} exact={true}/>
              
          </div>
          </section>
      </BrowserRouter>
  )
  }
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    user:state.user
  }
}


export default connect(mapStateToProps)(App);
