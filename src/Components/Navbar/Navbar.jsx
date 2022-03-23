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
                    
                    <Link className='nav-a' to="/">Home</Link> 
                   
                    </li>
                    <li className='nav-li'>
                   
                    <Link className="Livescore.js">Livescore</Link>
                    
                    </li>

                    <li className='nav-li'>
                   
                    <Link className='nav-a' to="/Schedule">Schedule</Link>
                   
                    </li>
                
                    <li className='nav-li'>
                 
                    <Link className='nav-a' to="/Achievement">Achievements</Link>
                   
                    </li>
                    
                    
                
                    <li className='nav-li'>
                    
                    <Link className='nav-a' to="/Contact">Contact</Link>
                   
                    </li>
                    <li className='nav-li'>
                 
                    <Link className='nav-a' to="/Login">Login</Link>
                   
                    </li>

                    
                </ul>

            </div>
        </nav>
        </>
    )
}

export default Navbar




























// import React from 'react';

// import { NavLink } from 'react-router-dom';
// import "./Navbar.css";
  
// const Navbar = () => {
//   return (
//     <>
//       <nav className="main-nav">
//           <div className="ul">
  
//         <div className="NavMenu">
//           <NavLink className="Navlink" to='/about' >
//             About  
//           </NavLink>
//           <NavLink  to='/events' className="Navlink" >
//             Events
//           </NavLink>
//           <NavLink  className="Navlink" to='/annual' >
//             Annual Report
//           </NavLink>
//           <NavLink className="Navlink" to='/team' >
//             Teams
//           </NavLink>
//           <NavLink  className="Navlink" to='/blogs' >
//             Blogs
//           </NavLink>
//           <NavLink className="Navlink" to='/sign-up' >
//             Sign Up
//           </NavLink>
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </div>
//         <div  className="NavBtn">
//           <NavLink  className="NavBtnLink" to='/signin'>Sign In</NavLink>
//         </div>
//         </div>
//         </nav>
//     </>
//   );
// };
  
// export default Navbar;