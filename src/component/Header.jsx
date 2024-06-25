import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <ul>
            <li>
                < NavLink to="/" >Home</NavLink>
            </li>
            <li>
                < NavLink to="/book">Book</NavLink>
            </li>
            <li>
                < NavLink to="/user">User</NavLink>

            </li>
        </ul>
    )
}
export default Header;