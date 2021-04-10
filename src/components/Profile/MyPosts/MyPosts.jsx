import Post from "./Post/Post";
import s from './MyPosts.module.scss'
import React from "react";
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/store";

const MyPosts = (props) => {
    const newPostData = props.state.posts.map(elem => {
        return (
            <Post message={elem.message}/>
        )
    })
    let linkInput = React.createRef();
    const inputValue = (e) => {
        e.preventDefault()
        props.dispatch(addPostActionCreator())

    }
    const callOnChange = () => {
        let text = linkInput.current.value;
        props.dispatch(addPostTextActionCreator(text))
    }

    return (
        <div className={s.myPosts}>
            <div className="my_post_form_title">Мои посты</div>
            <form className={s.form} action="#">
                <input
                    ref={linkInput} type="text"
                    onChange={callOnChange}
                    value={props.state.postText}
                />
                <button onClick={inputValue}>Отправить</button>
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