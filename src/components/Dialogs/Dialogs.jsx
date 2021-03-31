import {NavLink} from "react-router-dom";
import s from './Dialogs.module.scss'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
const Dialogs = (props) => {
    const newDialogs = props.dialogs.map(elem => {
        return (
            <Dialog id={elem.id} name={elem.name} />
        )
    })

    const newMessages = props.messages.map(elem => {
        return (
            <Message message={elem.message} />
        )
    })
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs_wrapper}>
                {newDialogs}
            </div>
            <div className="messages_wrapper">
                {newMessages}
            </div>
        </div>
    )
}
export default Dialogs