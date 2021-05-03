import MyPosts from "./MyPosts";
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        postText: state.profilePage.postText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost : () => {
            dispatch(addPostActionCreator())
        },
        updatePostText : (text) => {
            dispatch(addPostTextActionCreator(text))
        }


    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps) (MyPosts)
export default MyPostsContainer