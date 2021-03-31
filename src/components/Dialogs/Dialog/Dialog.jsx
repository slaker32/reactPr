import s from "../Dialogs.module.scss";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <NavLink activeClassName={s.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    )
}
export default Dialog;