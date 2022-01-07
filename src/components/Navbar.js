import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
 
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            DOCFIND
            <i class="fas fa-heartbeat"></i>
          </Link>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                HOME
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/doctors'
                className='nav-links'
              >
                DOCTORS
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/appointmets'
                className='nav-links'
              >
                YOUR APPOINTMENTS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;