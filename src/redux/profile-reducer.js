const ADD_POST = 'ADD_POST';
const ADD_POST_TEXT = 'ADD-POST-TEXT';



const profilePageReducer = (state,action) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.postText
            const post = {
                id: 5,
                message: text
            }
            state.posts.push(post)
            state.postText = ''
            return state;
        case ADD_POST_TEXT:
            state.postText = action.message
            return state;
        default:
            return state
    }


    return state
}


export default profilePageReducer;