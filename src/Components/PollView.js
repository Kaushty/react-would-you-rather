import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAnswerQuestion } from '../Actions/shared';

class PollView extends React.Component {

    constructor() {
        super();
        this.state = {
            toResult: false,
        }
    }

    handleOptionClick = (event) => {
        event.preventDefault()
        const answer = event.target.id;
        // Make calls to action creators and save question answer
        this.props.dispatch(handleAnswerQuestion(this.props.question, answer))
        this.setState({
            toResult: true,
        })        
    }

    render() {
        const {author, question } = this.props;

        if(this.state.toResult){
            return(
                <Redirect to={`/question/${question.id}/result`} />
            )
        }
        
        return(
            <div className="poll-view">
                <h4 id="user-name">{author.name} asks</h4>
                <div className="poll-question-body">
                    <img
                        id="poll-profile-pic"
                        src={author.avatarURL}
                        alt={author.name}
                    />
                    <div className="poll-question-details">
                        <h4>Would you rather?</h4>
                        <p id='optionOne'
                            onClick={(e) => this.handleOptionClick(e)}
                        >{question.optionOne.text}</p>
                        <h4>or</h4>
                        <p id='optionTwo'
                            onClick={(e) => this.handleOptionClick(e)}                    
                        >{question.optionTwo.text}</p>
                    </div>
                </div>
          </div>
        )
    }
}

function mapStateToProps({authedUser, users, questions},ownProps) {
    const quesID = ownProps.match.params.id;
    const author = users[questions[quesID].author]
    return {
        authedUser: authedUser.userDetails,
        author,
        question: questions[quesID],
    }
}

export default connect(mapStateToProps)(PollView);