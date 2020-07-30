import React from 'react';

import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom';
import { showLoading } from 'react-redux-loading-bar';

import { setAuthedUser, clearAuthedUser } from '../Actions/authedUser';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedUser: null,
            toHome: false,
        }
    }

    componentDidMount() {
        this.props.dispatch(clearAuthedUser())
    }

    handleChange = (e) => {
        const user = e.target.value;
        this.setState({
            selectedUser: user
        })
    }

    handleSubmit = (e) => {
        // Set the authedUser
        e.preventDefault()
        const { dispatch, users } = this.props;
        const { selectedUser } = this.state

        if( !selectedUser || selectedUser === 'none'){
            return
        }
        dispatch(setAuthedUser(users[selectedUser]));
        this.setState({
            toHome: true,
        })
    }

    render() {

        const {users, loading, dispatch, history} = this.props;

        if(loading || !users){
            dispatch(showLoading());
            
        }
        
        if(this.state.toHome) {
            const redirect = history.location.state;
            console.log(redirect)
            console.log(history)
            if (redirect != null) {
              return <Redirect to={redirect} push={true} />
            }
            return <Redirect to='/' />
          }

        return(
            <div className="signin">
              <h2 id="signin-title">Sign in</h2>
              <div className="signin-box">
                <select autoFocus name="users" id="user-id" required                    
                    onChange={(e) => this.handleChange(e)}                    
                >
                    <option value="none" >Choose the user</option>
                    {Object.keys(users).map(function(key) {
                        return (
                        <option value={users[key].id} key={key}>{users[key].name}</option>
                        );
                    })}
                </select>
                <button id="btn-signin" 
                    onClick={(e) => this.handleSubmit(e)}
                > Sign-in </button>
              </div>
            </div>
        )
    }
}

function mapStateToProps({users, dispatch}){
    return {
        users,
        loading: users===null,
        dispatch
    }
}

export default withRouter(connect(mapStateToProps)(Login));