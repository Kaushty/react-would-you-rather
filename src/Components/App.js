import React, { Fragment } from 'react';
// import '../Styles/App.css';
import '../Styles/root_style.css';
import {connect} from 'react-redux'
import { handleInitialData } from '../Actions/shared'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import ProtectedRoute from '../Utils/ProtectedRoute'
import Nav from './Navbar'
import Login from './Login'
import DashBoard from './DashBoard'

class App extends React.Component {  

  componentDidMount() {
    console.log(this.props)
    this.props.dispatch(handleInitialData());
  }

  render() {

    const {users, authedUser, loggedIn} = this.props;
    return(
      <Router >
        <div>
          <h1 className='app-title'>Would You Rather ?</h1>         
            <Nav loggedIn={loggedIn}/>
            <Switch>
              <ProtectedRoute to='/' exact Component={DashBoard} loggedIn={loggedIn}/>
              <Route path='/login' exact component={Login} />
            </Switch>            
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({ users, authedUser }) => {
  return {
    users,
    authedUser,
    loggedIn: authedUser.id ? true : false,
  }
}

export default connect(mapStateToProps)(App);
