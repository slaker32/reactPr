import {NavLink} from "react-router-dom";
import s from './Dialogs.module.scss'
const Dialogs = () => {
    const dialogsName = [
        {name: 'Alex',id: '1'},
        {name: 'Nadya',id: '2'},
        {name: 'Alexander',id: '3'},
    ]
    const newDialogsName = dialogsName.map(elem => {
        return (
            <NavLink activeClassName={s.active} to={`/dialogs/${elem.id}`}>{elem.name}</NavLink>
        )
    })

    const messages = [
        {message: 'Привет',id: '1'},
        {message: 'Как дела',id: '2'},
        {message: 'Нормально',id: '3'},
    ]

    const newMessages = messages.map(elem => {
        return (
            <div>{elem.message}</div>
        )
    })
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs_wrapper}>
                {newDialogsName}
            </div>
            <div className="messages_wrapper">
                {newMessages}
            </div>
        </div>
    )
}
export default Dialogs