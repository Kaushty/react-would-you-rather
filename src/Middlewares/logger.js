const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('The Action is ', action);
    next(action);
    console.log('The state is ', store.getState());
    console.groupEnd();
}

export default logger;