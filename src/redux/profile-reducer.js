const ADD_POST = 'ADD_POST';
const ADD_POST_TEXT = 'ADD-POST-TEXT';


const initialState = {
    posts: [
        {id: 1,message: 'Привет'},
        {id: 2,message: 'Я Алексей'},
        {id: 3,message: 'реаткd'},
    ],
    postText: ''
}
const profilePageReducer = (state = initialState,action) => {
    switch (action.type) {
        case ADD_POST: {
            let text = state.postText
            const post = {
                id: 5,
                message: text
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(post)
            stateCopy.postText = ''
            return stateCopy;
        }
        case ADD_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.postText = action.message      
            return stateCopy;
        }
        default:
            return state
    }


    return state
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


export default profilePageReducer;