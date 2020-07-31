import React,{ Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class Questions extends Component {

    render() {
        const { questionAuthor, questionDetails, isAnswered} = this.props;
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
                        <Link id="btn-poll"
                            to={isAnswered ? `question/${questionDetails.id}/result`: `question/${questionDetails.id}`}
                        >View Poll</Link>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps({authedUser, questions, users}, {questionID}) {
    const { userDetails } = authedUser;
    const questionDetails = questions[questionID]
    const questionAuthor = users[questionDetails.author]
    const answeredKeys = Object.keys(userDetails.answers);
    const isAnswered = answeredKeys.includes(questionID)
    return {
        userDetails: authedUser.userDetails,
        questionAuthor,
        questionDetails,
        isAnswered,
    }
}

export default connect(mapStateToProps)(Questions)