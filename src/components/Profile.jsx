const Profile = () => {
    return (
        <div className='profile'>
            <div className="profile_info">
                <div className="avatar">
                    <img src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg" alt=""/>
                </div>
            </div>
            <div className="myPosts">
                <div className="my_post_form_title">Мои посты</div>
                <form action="#">
                    <input type="text"/>
                    <button>Отправить</button>
                </form>
                <div className="view_post">
                    <ul>
                        <li>Пост 1</li>
                        <li>Пост 2</li>
                        <li>Пост 3</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default Profile