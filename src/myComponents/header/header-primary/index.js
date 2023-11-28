import "./sass/main.scss"


function HeaderPrimary() {
    return (
        <header className="header">
            <div className="textBox">
                <h1 className="headingPrimary">
                    <span className="headingPrimaryMain">Outdoors</span>
                    <span className="headingPrimarySub">is where life happens</span>
                </h1>
                <a href="www.google.com" className="btn btnPrimary">discover our tour</a>
            </div>
        </header>
    )
}
export default HeaderPrimary