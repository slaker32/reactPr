import Post from "./Post/Post";
import s from './MyPosts.module.scss'
import React from "react";

const MyPosts = (props) => {
    const newPostData = props.posts.map(elem => {
        return (
            <Post message={elem.message}/>
        )
    })
    const onAddPost = () => {
        props.addPost()
    }
    const onUpdatePostText = (e) => {
        const text = e.target.value
        props.updatePostText(text)
    }
     return (
        <div className={s.myPosts}>
            <div className="my_post_form_title">Мои посты</div>
            <form className={s.form} action="#">
                <input
                    type="text"
                    onChange={onUpdatePostText}
                    value={props.postText}
                />
                <button onClick={onAddPost}>Отправить</button>
            </form>
            <div className={s.view_posts}>
                <ul>
                    {newPostData}
                </ul>
            </div>
        </div>
    )
}
export default MyPosts