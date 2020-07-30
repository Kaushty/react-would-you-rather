import React, { Component } from 'react'
import { connect } from 'react-redux'

import Questions from './QuestionView'

class DashBoard extends Component {

    constructor() {
        super();
        this.state = {
            showQuestions: 'unanswered',            
        }
    }

    handleToggleClick = (e) => {
        e.preventDefault();
        // Change the state         
        const tglTab = e.target.id;
        this.setState({
            showQuestions: tglTab,
        })

    }

    render() {
        const answeredQuestion = Object.keys(this.props.userDetails.answers);
        const questionKeys = Object.keys(this.props.questions)
        const unansweredQuestion = questionKeys.filter((question) => (
            // questions that are not in answeredQuestions
           !answeredQuestion.includes(question)
        ));
        const {showQuestions} = this.state;

        const finQuestions = showQuestions === 'unanswered' ? unansweredQuestion : answeredQuestion;

        return (
            <div className="questions">

                <button     
                    id="unanswered"
                    className={this.state.showQuestions === 'unanswered' ?'tgl-btn active': 'tgl-btn'}
                    onClick={(e) => this.handleToggleClick(e)}
                 >Unanswered</button>

                <button 
                    id="answered"
                    className={this.state.showQuestions === 'answered' ?'tgl-btn active': 'tgl-btn'}
                    onClick={(e) => this.handleToggleClick(e)}
                >Answered</button>

                {/* List of Questions */}
                    <ul className= 'question-list'>
                        {
                            finQuestions.map((question) => (
                               <li key={question} className="ind-questions">
                                    <Questions questionID={question} />
                               </li>
                            ))  
                        }
                    </ul>                   
                </div>
        )
    }
}

function mapStateToProps({authedUser, questions}){
    const { userDetails } = authedUser
    return {
        userDetails,
        questions,
    }
}

export default connect(mapStateToProps)(DashBoard);