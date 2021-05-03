import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";
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



export default store