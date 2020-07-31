import React from 'react'
import { connect } from 'react-redux'

function LeaderBoard (props) {
    const { users } = props;
    const userCount = Object.keys(users);
    return(        
        <div className="leaderboard">
            <h2 id="ldr-brd-title">LeaderBoard</h2>
            <ul className="leader-list">
                {
                    userCount.map((userID) => {
                        const answeredCount = Object.keys(users[userID].answers).length;
                        const askedCount = users[userID].questions.length;
                        return(
                            <li
                                key={userID}
                                className="ind-board">
                                <img
                                    id="profile-pic"
                                    src={users[userID].avatarURL}
                                    alt={users[userID].name}
                                />
                                <div className="profile-details">
                                    <h3>{userID}</h3>
                                    <p>Question answered <strong>{answeredCount}</strong></p>
                                    <p>Questions created <strong>{askedCount}</strong></p>
                                </div>
                                <div className="score">
                                    <h4>score</h4>
                                    <p id='total-score'>{answeredCount + askedCount}</p>
                                </div>
                            </li>
                        )                        
                    })
                }
            </ul>
        </div>

    )
}

function mapStateToProps({users}){
    // const userID = Object.keys(users);
    // const scores = userID.map((user) => (
    //     Object.keys(users[user].answers).length + users[user].questions.length
    // ))
    
    let scoreList = {}

    // for( let i = 0; i < userID.length; i++){
    //     // scoreList = Object.assign({},scoreList,{}
    // }

    return {
        users,
        scoreList,
    }
}

export default connect(mapStateToProps)(LeaderBoard)