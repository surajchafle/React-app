import '../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav>
            <div className="logo">🚀 Blood Donation</div>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')}>Login</NavLink>
            <NavLink to="/signup" className={({ isActive }) => (isActive ? 'active' : '')}>SignUp</NavLink>
        </nav>
    );
}