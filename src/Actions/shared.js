// import { getUser } from "../Utils/api";
import { receiveUsers , addAnswer, addUserQuestion} from "./users";
import { getUsers, getQuestions, saveQuestionAnswer, getUser, saveQuestion } from "../Utils/api";
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { receiveQuestions, answerQuestion, addQuestion } from "./questions";
import { updateAuthedUser } from "./authedUser";

// Action to make async call to API 
export function handleInitialData() {
    return (dispatch) => {
        // Aync call to get all users and questions and save it to the store.
        dispatch(showLoading())
        Promise.all([
            getUsers(),
            getQuestions()]
        )
        .then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return function(dispatch, getState) {
    const { authedUser } = getState();

    const questionInfo = {
      optionOneText,
      optionTwoText,
      author: authedUser.id,
    };

    Promise.all([
      saveQuestion(questionInfo),
      getUser(authedUser.id)
    ])
    .then(([question, userDetails]) => {
      // console.log(question,userDetails)
      dispatch(addQuestion(question))
      dispatch(addUserQuestion(question, userDetails.id))
      dispatch(updateAuthedUser(userDetails))
    });       
  };
}

export function handleAnswerQuestion(question, answer) {
    return function(dispatch, getState) {
      const { authedUser } = getState();
      dispatch(showLoading())
  
      const answerInfo = {
        authedUser: authedUser.id,
        qid: question.id,
        answer,
      };
  
      return Promise.all([
        saveQuestionAnswer(answerInfo),
        getUser(authedUser.id)
      ])
      .then(([res, userDetails]) => {
        dispatch(answerQuestion(authedUser.id, question.id, answer))
        dispatch(addAnswer(authedUser.id, question.id, answer))
        dispatch(updateAuthedUser(userDetails))
        dispatch(hideLoading())
      })      
    }
  } 