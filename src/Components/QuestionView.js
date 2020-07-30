import React,{ Component, Fragment } from 'react';
import { connect } from 'react-redux'

class Questions extends Component {

    handleQuestionClick = (e) => {
        e.preventDefault();
        // Load the poll for that question
    }

    render() {
        const { questionAuthor, questionDetails} = this.props;
        return (
            <Fragment >
                 <h4 id="user-name">{questionAuthor.name} asks</h4>
                    <div className="question-body">
                    {/* <!-- Individual Question div --> */}
                        <img
                            id="profile-pic"
                            src={questionAuthor.avatarURL}
                            alt={`${questionAuthor.id}`}
                        />
                        {/* <!-- Question Details --> */}
                        <div className="question-details">
                            <h4>Would you rather?</h4>
                            <p className="option">{questionDetails.optionOne.text }</p>
                            <strong>OR</strong>
                            <p className='option'>{questionDetails.optionTwo.text }</p>
                            <button id="btn-poll"
                                onClick={(e) => {this.handleQuestionClick(e)}}
                            >View Poll</button>
                        </div>
                    </div>
            </Fragment>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {questionID}) {
    const questionDetails = questions[questionID]
    const questionAuthor = users[questionDetails.author]
    return {
        userDetails: authedUser.userDetails,
        questionAuthor,
        questionDetails,
    }
}

export default connect(mapStateToProps)(Questions)