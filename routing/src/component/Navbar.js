import React from 'react'
import { NavLink, withRouter} from 'react-router-dom'

const Navbar = () => {

    return (
    
        <nav className="nav-wrapper" red darken-3>
        <div className="container">
            <a className="brand-logo">PokeTimes</a>
            <ul className="right">
                <li><NavLink to="/conn">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </div>
        </nav>
    )
}

export default withRouter(Navbar)