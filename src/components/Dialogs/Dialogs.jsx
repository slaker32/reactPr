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

    const updateMessage = (e) => {
        let message = e.target.value;
        props.updateMessage(message)
    }
    const addMessage = () => {
        props.addMessage()
    }
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs_wrapper}>
                {newDialogs}
            </div>
            <div className="messages_wrapper">
                <div>{newMessages}</div>
                <div><input className={s.input} type="text" onChange={updateMessage} value={props.newTextMessages}/> </div>
                <div><button className={s.button} onClick={addMessage}>Отправить</button></div>
            </div>
        </div>
    )
}
export default Dialogs