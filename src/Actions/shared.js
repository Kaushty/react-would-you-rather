// import { getUser } from "../Utils/api";
import { receiveUsers , addAnswer} from "./users";
import { getUsers, getQuestions, saveQuestionAnswer } from "../Utils/api";
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { receiveQuestions, answerQuestion } from "./questions";

// Action to make async call to API 
export function handleInitialData() {
    return (dispatch) => {
        // Aync call to get all users and questions and save it to the store.
        dispatch(showLoading())
        Promise.all([
            getUsers(),
            getQuestions()]
        ).then(([users, questions]) => {
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions))
            dispatch(hideLoading())
        })
    }
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
  
      return saveQuestionAnswer(answerInfo)
        .then(() => {
          dispatch(answerQuestion(authedUser.id, question.id, answer))
          dispatch(addAnswer(authedUser.id, question.id, answer))
          dispatch(hideLoading())
        })
    }
  } 