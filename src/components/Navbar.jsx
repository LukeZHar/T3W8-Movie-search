import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return(
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Movie App</Link>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/watchlist" className="nav-link">Watchlist</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}