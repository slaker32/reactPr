import {NavLink} from "react-router-dom";
import s from './Nav.module.scss'
const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink activeClassName={s.active} to="/dialogs">Dialogs</NavLink>
            </div>
        </nav>
    )
}
export default Nav