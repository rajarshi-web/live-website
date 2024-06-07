import React from "react";


function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand " href="#">
                    LO<span>GO</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="home" href="#">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="about" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="blog" href="#">
                                Blog
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link "
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Service{" "}
                                <span>
                                    <i className="fa-solid fa-chevron-down" />
                                </span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Finance
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Retirement
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="blog" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <button className="btn btn-outline-dark" type="submit">
                        Request For a Quote
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;