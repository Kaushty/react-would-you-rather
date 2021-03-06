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
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import PollView from './PollView'
import PollViewResult from './PollViewResult';
import FourZeroFour from './ErrorComponent'

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
        <LoadingBar loading={this.props.loading} />
          <h1 className='app-title'>Would You Rather ?</h1>         
            <Nav loggedIn={loggedIn}/>
            <Switch>
              <ProtectedRoute path='/' exact component={DashBoard} loggedIn={loggedIn}/>
              <ProtectedRoute path='/add' exact component={NewQuestion} loggedIn={loggedIn}/>
              <ProtectedRoute path='/leaderboard' exact component={LeaderBoard} loggedIn={loggedIn}/>
              <ProtectedRoute path='/question/:id' exact component={PollView} loggedIn={loggedIn}/>
              <ProtectedRoute path='/question/:id/result' exact component={PollViewResult} loggedIn={loggedIn} />
              <Route path='/login' exact component={Login} />
              <Route component={FourZeroFour} />
            </Switch>            
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({users, authedUser, ...loadingBar}) => {
  console.log(loadingBar.loadingBar.default)

  return {
    users,
    authedUser,
    loggedIn: authedUser.id ? true : false,
    loading: loadingBar.loadingBar.default,
  }
}

export default connect(mapStateToProps)(App);
