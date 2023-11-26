import HeaderPrimary from "./header-primary"
import style from "./header.module.css"
// import Logo from "./logo"
function Header() {
    return (

        <div className={style.container}>
            <div className={style.title}>
                <HeaderPrimary />
            </div>
        </div>
    )
}
export default Header
