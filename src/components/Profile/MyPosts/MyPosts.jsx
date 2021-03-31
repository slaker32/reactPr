import Post from "./Post/Post";
import s from './MyPosts.module.scss'

const MyPosts = (props) => {
    const newPostData = props.posts.map(elem => {
        return (
            <Post message={elem.message}/>
        )
    })

    return (
        <div className={s.myPosts}>
            <div className="my_post_form_title">Мои посты</div>
            <form className={s.form} action="#">
                <input type="text"/>
                <button>Отправить</button>
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