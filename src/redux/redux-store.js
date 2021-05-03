import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profile-reducer";
import dialogsPageReducer from "./dialogs-reducer";
const reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogsPageReducer
})
const store = createStore(reducers);

export default store;