import React from 'react'
import { Link} from 'react-router-dom'
import "./nav.css";

const Navbar = () => {
    return (
        <>
        <nav className="main-nav">
          
            <div className="menu">
                <ul className='nav-ul'>
                    <li className='nav-li'>
                    <Link className='nav-a' to="/">Home</Link></li>
                    <li className='nav-li'>
                    <Link className='nav-a' to="/Schedule">Schedule</Link></li>
                    <li className='nav-li'>
                    <Link className='nav-a' to="/Achievement">Achievements</Link></li>
                    <li className='nav-li'>
                    <Link className='nav-a' to="/Login">Login/Register</Link></li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar





