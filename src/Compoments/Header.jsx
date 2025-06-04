function Header(props) {
    return (
        <header className="flex-align">
            <div className="container flex-between flex-align">
                <h1>{props.Title}</h1>
                <nav>
                    <ul className="flex gap-10">
                        {props.Links.map(link => (
                            <li>
                                <a href={link.url}>{link.Name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;