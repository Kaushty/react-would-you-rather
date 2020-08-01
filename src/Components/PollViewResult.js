import React from 'react'
import { connect } from 'react-redux';

import FourZeroFour from './ErrorComponent'

class PollViewResult extends React.Component {

    render() {
        const {author, answer, question, pageNotFound } = this.props;

        if(pageNotFound) {
            return <FourZeroFour />
        }
        
        const optionOneVotes = question.optionOne.votes.length;
        const optionTwoVotes = question.optionTwo.votes.length
        const totalVotes = optionOneVotes + optionTwoVotes;

        const optionOnePercent = Math.ceil(optionOneVotes/totalVotes * 100);
        const optionTwoPercent = Math.ceil(optionTwoVotes/totalVotes * 100);
        

        return(
            <div className="poll-view">
                <h4 id="user-name">{author.name} asks</h4>
                <div className="poll-question-body">
                    <img
                        id="poll-profile-pic"
                        src={author.avatarURL}
                        alt={author.name}
                    />
                    <div className="poll-result-details">
                        <h4>Would you rather?</h4>
                        <div className={answer === 'optionOne' ? 'opt selected': 'opt'}>
                            <div className='inner-opt'>
                                <p id='optionOne'>{question.optionOne.text}</p> 
                                <p id='percent'> { optionOnePercent }% </p>
                            </div>
                            <p>{optionOneVotes} vote received out of {totalVotes}</p>
                        </div>

                        <div className={answer === 'optionTwo' ? 'opt selected': 'opt'}>
                            <div className='inner-opt'>
                                <p id='optionTwo'>{question.optionTwo.text}</p> 
                                <p id='percent'> { optionTwoPercent }% </p>
                            </div>
                            <p>{optionTwoVotes} vote received out of {totalVotes}</p>                        
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}


function mapStateToProps({authedUser, users, questions},ownProps) {
    let pageNotFound = true;
    const quesID = ownProps.match.params.id;
    let author = '';
    let answer = '';

    if(questions[quesID] !== undefined){
        pageNotFound = false;
        author = users[questions[quesID].author]
        answer = users[authedUser.id].answers[quesID];
    }

    return {
        pageNotFound,
        author,
        answer,
        question: questions[quesID],
    }
}

export default connect(mapStateToProps)(PollViewResult);