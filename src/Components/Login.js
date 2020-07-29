import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import { connect } from 'react-redux'

class Login extends React.Component {
    render() {
        const users = this.props;

        return(
            <div className="signin">
              <h2 id="signin-title">Sign in</h2>
              <div className="signin-box">
                <input type="text" id="user-id" />
                <select>
                    {Object.keys(users).map(function(key) {
                        return (
                        <option value={users[key].id} key={key}>{users[key].id}</option>
                        );
                    })}
                </select>
                <button id="btn-signin">Sign-in</button>
              </div>
            </div>
        )
    }
}

function mapStateToProps({users}){
    return {
        users
    }
}

export default withRouter(connect(mapStateToProps)(Login));