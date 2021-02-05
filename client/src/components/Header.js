const Header = () => {
    return (
        <nav className="header navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Blog</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            categories
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Technology</a></li>
                            <li><a className="dropdown-item" href="#">Innovation</a></li>
                            <li><a className="dropdown-item" href="#">Devlopment</a></li>
                        </ul>
                    </li> */}
                    <li className="nav-item">
                    <a className="nav-link" href="/createpost">Create Blog</a>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Add Blog</a>
                    </li> */}
                    <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                    </li>
                </ul>
                {/* <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search Blogs" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    );
}

export default Header;
