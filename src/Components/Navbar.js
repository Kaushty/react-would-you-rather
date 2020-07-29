import React from 'react'
import { connect } from 'react-redux'
import { NavLink, Redirect } from "react-router-dom";

function Nav (props) {
    // Navbar Component
    console.log(props)
    const { loggedIn, userDetails} = props;

    if(!loggedIn) {
       return (
        //    <Redirect to='/login'/>
        <div></div>
       )
    }
    
    return (
    <div className="navbar">
        <ul className="navbar-list">
          <li id="home">
              <NavLink to="/">Home</NavLink>
            </li>
          <li id="new">
              <NavLink to="/add">New Question</NavLink>
            </li>
          <li id="leaderboard">
              <NavLink to="/leaderboard">Leaderboard</NavLink>
            </li>
          <li>Hello, 
              <span id="authuser"> {userDetails.name} </span>
            </li>
          <li>
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