import { NavLink} from 'react-router-dom';
import CartWidget from '../CartWidget';
import './NavBar.css';
import { ReactLogo } from '../ReactLogo';

export default function NavBar() {
    return(
    <nav className="navbar">
        <header className='header'>
            <ReactLogo /> 
        </header>
        <div className="links">
            <NavLink to={`/`} > Shop </NavLink>
            <NavLink to={`/category/headphones`} > Headphones </NavLink>
            <NavLink to={`/category/laptop`} > Notebooks</NavLink>
            <NavLink to={`/category/smartphone`} > Phones</NavLink>
        </div>
        <NavLink to={`/cart`} >  <CartWidget  /></NavLink>
    </nav>
    )
}