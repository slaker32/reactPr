import s from './Header.module.scss'
const Header = () => {
    return (
        <header className={s.header}>
            <a href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""/>
                <div>В React'е</div>
            </a>
        </header>
    )
}
export default Header