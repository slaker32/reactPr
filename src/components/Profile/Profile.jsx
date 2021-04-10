import s from './Profile.module.scss'
import MyPosts from "./MyPosts/MyPosts";
const Profile = (props) => {
    return (
        <div className={s.profile}>
            <div className={s.profile_info}>
                <div className={s.avatar}>
                    <img src="https://365psd.com/images/istock/previews/1009/100996291-male-avatar-profile-picture-vector.jpg" alt=""/>
                </div>
            </div>
            <MyPosts
                state={props.state}
                dispatch={props.dispatch}
            />
        </div>
    )
}
export default Profile