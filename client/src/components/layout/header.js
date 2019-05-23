import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { isAuthenticated }  from '../commons/isAuth'


const Header = (props) => {
    return(
        <div>

 <nav class="navbar navbar-expand-md navbar-dark fixed-top">
  <a class="navbar-brand" href="#">Finder</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse">
    <ul class="navbar-nav">
     
       { isAuthenticated(props.user) && (
                              <div className="header-bar">
                                 <li class="nav-item">
                             <a>  <Link className="nav-link"  to='/'>Home </Link></a>
                          </li>
                          
                          <li class="nav-item active">
                                      <Link className="nav-link" to='/aboutus'>About Us</Link>
                          </li>
                          
                                  <li class="nav-item active">
                                      <Link className="nav-link" to='/dashboard'>My Dashboard</Link>
                                  </li>

                                  <li class="nav-item active">
                                      <Link className="nav-link" to='/users/logout'>Logout</Link>
                                   </li>
                              </div> 
                           )
                        }
          { !isAuthenticated(props.user) && (
                            <div className="header-bar"> 
                             <li class="nav-item active">
                               <Link className="nav-link"  to='/'>Home </Link>
                          </li>
                                  <li class="nav-item active">
                                        <Link className="nav-link"  to='/users/register'> Register</Link>
                                  </li>

                                  <li class="nav-item active">
                                  <Link className="nav-link" to='/users/login'> Login</Link>
                                  </li>           
                            </div>
                         )
                      }
    </ul>
   
  </div>
</nav>


        </div>
    )

}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
      user:state.user
    }
  }
  
  
  export default connect(mapStateToProps)(Header)
