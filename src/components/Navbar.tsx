import "../css/navbar.css";

function Navbar() {
    return (
        <>
        <nav className="navbar-main">
            <ul>
                <li><a href="/">Domů</a></li>
                <li><a href="/nabor/">Nábory</a></li>
                <li><a href="/">Náš Tým</a></li>
                <li><a href="/changelog/">Changelog</a></li>
                <li><a href="/">Přihlášení</a></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;