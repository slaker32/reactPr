const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE_TEXT_MESSAGE';
const initialState = {
    dialogs: [
        {name: 'Alexei',id: '1'},
        {name: 'Nadya',id: '2'},
        {name: 'Alexander',id: '3'},
    ],
    messages : [
        {message: 'Привет',id: '1'},
        {message: 'Как дела',id: '2'},
        {message: 'Нормально!',id: '3'},
    ],
    newTextMessages: ''
}
const dialogsPageReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_MESSAGE : {
            let text = state.newTextMessages
            const message = {
                message: text,
                id: 3
            }
            let stateCopy = {...state}
            stateCopy.messages = [...state.messages]
            stateCopy.messages.push(message)
            stateCopy.newTextMessages = ''
            return stateCopy;
        }
            
        case UPDATE_TEXT_MESSAGE : {
            let stateCopy = {...state}
            stateCopy.newTextMessages = action.message;
            return stateCopy;
        }
        default:
            return state

    }

    return state
}



export const addMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateMessageCreator = (message) => {
    return {
        type: UPDATE_TEXT_MESSAGE,
        message: message
    }
}

export default dialogsPageReducer