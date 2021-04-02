let rerenderEntireThree = () => {

}
const state = {
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
    profilePage: {
        posts: [
            {id: 1,message: 'Привет'},
            {id: 2,message: 'Я Алексей'},
            {id: 3,message: 'реаткd'},
        ],
        postText: ''
    }
}

export const addPost = () => {
    const post = {
        id: 5,
        message: state.profilePage.postText
    }
    state.profilePage.posts.push(post)
    state.profilePage.postText = ''
    rerenderEntireThree(state)
}
export const addPostText = (text) => {
    state.profilePage.postText = text
    rerenderEntireThree(state)
}
export const subscriber = (observer) => {
    rerenderEntireThree = observer
}

export default state