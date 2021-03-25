import Post from "./Post/Post";
import s from './MyPosts.module.scss'

const MyPosts = () => {
const postData = [
    {id: 1,message: 'Привет'},
    {id: 2,message: 'Я алексей'},
    {id: 3,message: 'реатк'},
]
    const newPostData = postData.map(elem => {
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