import { connect } from "react-redux";
import { addMessageCreator, updateMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        updateMessage: (message) => {
            dispatch(updateMessageCreator(message))
        }
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)
export default DialogsContainer