import {NavLink} from "react-router-dom";
import s from './Dialogs.module.scss'
import Message from "./Message/Message";
import Dialog from "./Dialog/Dialog";
import {addMessageCreator, updateMessageCreator} from "../../redux/store";
const Dialogs = (props) => {
    const newDialogs = props.state.dialogs.map(elem => {
        return (
            <Dialog id={elem.id} name={elem.name} />
        )
    })

    const newMessages = props.state.messages.map(elem => {
        return (
            <Message message={elem.message} />
        )
    })

    const updateInputValue = (e) => {
        let bodyMessage = e.target.value;
        props.dispatch(updateMessageCreator(bodyMessage))
    }
    const addMessage = () => {
        props.dispatch(addMessageCreator())
    }
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs_wrapper}>
                {newDialogs}
            </div>
            <div className="messages_wrapper">
                <div>{newMessages}</div>
                <div><input className={s.input} type="text" onChange={updateInputValue} value={props.state.newTextMessages}/> </div>
                <div><button className={s.button} onClick={addMessage}>Отправить</button></div>
            </div>
        </div>
    )
}
export default Dialogs