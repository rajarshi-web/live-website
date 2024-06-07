import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                        <div className="col">
                            <div className="logo-footer">
                                <h2>
                                    LO<span>GO</span>
                                </h2>
                                <p>
                                    Top learning experiences that create more talent in the world.
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="menus">
                                <h5>Product</h5>
                                <div className="listing">
                                    <ul>
                                        <li>
                                            <a href="#">Overview</a>
                                        </li>
                                        <li>
                                            <a href="#">Features</a>
                                        </li>
                                        <li>
                                            <a href="#">Solutions</a>
                                        </li>
                                        <li>
                                            <a href="#">Tutorials</a>
                                        </li>
                                        <li>
                                            <a href="#">Pricing</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="menus">
                                <h5>Company</h5>
                                <div className="listing">
                                    <ul>
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Press <span>New</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">Tutorials</a>
                                        </li>
                                        <li>
                                            <a href="#">News</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="menus">
                                <h5>Legal</h5>
                                <div className="listing">
                                    <ul>
                                        <li>
                                            <a href="#">Terms</a>
                                        </li>
                                        <li>
                                            <a href="#">Privacy</a>
                                        </li>
                                        <li>
                                            <a href="#">Cookies</a>
                                        </li>
                                        <li>
                                            <a href="#">Tutorials</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copy">
                        <div className="copyright">
                            <div className="reserved">
                                <p>© 2024. All rights reserved.</p>
                            </div>
                            <div className="social-media">
                                <a href="#">
                                    <i className="fa-brands fa-x-twitter" />
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-linkedin" />
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-facebook" />
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fa-solid fa-envelope" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
