import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";

const ADD_POST = 'ADD_POST';
const ADD_POST_TEXT = 'ADD-POST-TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_TEXT_MESSAGE = 'UPDATE_TEXT_MESSAGE';
const store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1,message: 'Привет'},
                {id: 2,message: 'Я Алексей'},
                {id: 3,message: 'реаткd'},
            ],
            postText: ''
        }
    },


    rerenderEntireThree(){

    },
    getState(){
        return this._state;
    },
    subscriber(observer){
        this.rerenderEntireThree = observer
    },
    dispatch(action){
        this._state.profilePage = profilePageReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage,action)
        this.rerenderEntireThree(this._state)
    }

}
export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const addPostTextActionCreator = (text) => {
    return {
        type: ADD_POST_TEXT,
        message: text
    }
}


export const addMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const updateMessageCreator = (bodyMessage) => {
    return {
        type: UPDATE_TEXT_MESSAGE,
        bodyMessage:bodyMessage
    }
}
export default store