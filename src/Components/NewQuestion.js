import React from 'react'
import { connect } from 'react-redux';
import { handleAddQuestion } from '../Actions/questions';
import { Redirect } from 'react-router';

class NewQuestion extends React.Component {  

    constructor() {
        super();
        this.state = {
            toHome: false,
        }
    }

    handleNewQuestionClick = (event) => {
        event.preventDefault();
        const optionOne = document.getElementById('opt1').value;
        const optionTwo = document.getElementById('opt2').value;

        if( optionOne && optionTwo){
            this.props.dispatch(handleAddQuestion(optionOne, optionTwo))  
            this.setState({
                toHome: true,
            })       
        }       
        return 
    }

    render() {

        if(this.state.toHome){
            const redirect = this.props.history.location.state;
            if(redirect != null){
               return <Redirect to={redirect}/>
            }
            return <Redirect to='/' />
        }

        return (        
            <div className="new-question">
                <h2 id="create-title">Create New Question</h2>
                <form className="ques-form">
                    <label htmlFor="opt1">Would You Rather?</label>
                    <input type="text" name="option1" id="opt1" />
                    <label htmlFor="opt2"> or </label>
                    <input type="text" name="option2" id="opt2" />
                    <input type="submit" id="sub-btn"
                        onClick={(e) => this.handleNewQuestionClick(e)}
                    />
                </form>
            </div>
        )
   }
}

function mapStateToProps({authedUser}){
    return {
        authedUser,
    }
}

export default connect(mapStateToProps)(NewQuestion)