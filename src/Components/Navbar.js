import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from "react-router-dom";

function Nav (props) {
    // Navbar Component
    const { loggedIn, userDetails} = props;

    if(!loggedIn) {
       return (
           <Redirect to='/login'/>
       )
    }
    
    return (
    <div className="navbar">
        <ul className="navbar-list">
          <li id="home">
              <NavLink className='nav-item' to="/" exact activeClassName='active'>Home</NavLink>
            </li>
          <li  id="new">
              <NavLink className='nav-item' to="/add" exact activeClassName='active'>New Question</NavLink>
            </li>
          <li id="leaderboard">
              <NavLink className='nav-item' to="/leaderboard" exact activeClassName='active'>Leaderboard</NavLink>
            </li>
          <li>Hello, 
              <span id="authuser"> {userDetails.name} </span>
            </li>
          <li >
              <NavLink id="logout" to="/login">Logout</NavLink>
            </li>
        </ul>        
      </div>
    )
}

function mapStateToProps(state, { loggedIn }) {
    const { id, userDetails } = state.authedUser;
    return {
        id,
        userDetails,
        loggedIn,
    }
}

export default connect(mapStateToProps)(Nav);