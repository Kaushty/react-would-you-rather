import {
    _getUsers,
    _getUser,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer
 } from './_DATA.js';
  

export function getUser(id) {
    return _getUser(id);
}

export function getUsers() {
    return _getUsers();
}

export function getInitialData() {
    return Promise.all([
      _getUsers(),
    ]).then(function([users]) {
      return {
        users,
      };
    });
};

export function getQuestions() {
    return _getQuestions();
}

export function saveQuestion(question) {
    return _saveQuestion(question);
}

export function saveQuestionAnswer(state) {
    return _saveQuestionAnswer(state)
}