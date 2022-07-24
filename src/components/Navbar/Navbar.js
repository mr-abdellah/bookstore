import { NavLink } from 'react-router-dom';
import './Navbar.css';
import user from './user.png';

export default function Navbar() {
  return (
    <>
      <nav>
        <h2>Bookstore CMS</h2>
        <ul className="nav-links">
          <NavLink to="/">Books</NavLink>
          <NavLink to="/categories">Categories</NavLink>
        </ul>
        <button id="userBtn" type="submit"><img id="userImg" src={user} alt="user" /></button>
      </nav>
    </>
  );
}
