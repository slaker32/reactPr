const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE_TEXT_MESSAGE';

const dialogsPageReducer = (state,action) => {
    switch (action.type) {
        case ADD_MESSAGE :
            let text = state.newTextMessages
            const message = {
                message: text,
                id: 3
            }
            state.messages.push(message)
            state.newTextMessages = ''
            return state;
        case UPDATE_TEXT_MESSAGE :
            state.newTextMessages = action.bodyMessage;
            return state;
        default:
            return state

    }

    return state
}

export default dialogsPageReducer