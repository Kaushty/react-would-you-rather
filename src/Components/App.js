import React, { Fragment } from 'react';
// import '../Styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import '../Styles/root_style.css';
import {connect} from 'react-redux'
import { LoadingBar } from 'react-redux-loading-bar';

import { handleInitialData } from '../Actions/shared'

import ProtectedRoute from '../Utils/ProtectedRoute'
import Nav from './Navbar'
import Login from './Login'
import DashBoard from './DashBoard'

class App extends React.Component {  

  componentDidMount() {
    const { dispatch } = this.props;    
    dispatch(handleInitialData());
  }

  render() {

    const {loggedIn} = this.props;
    return(
      <Router >
        <Fragment>
          <LoadingBar />
          <h1 className='app-title'>Would You Rather ?</h1>         
            <Nav loggedIn={loggedIn}/>
            <Switch>
              <ProtectedRoute path='/' exact component={DashBoard} loggedIn={loggedIn}/>
              <Route path='/login' exact component={Login} />
            </Switch>            
        </Fragment>
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
