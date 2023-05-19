import { NavLink} from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
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
            <NavLink to={`/category/Notebooks`} > Notebooks</NavLink>
            <NavLink to={`/category/smartphone`} > Smartphones</NavLink>
        </div>
        <NavLink to={`/Checkout`} >  <CartWidget /></NavLink>
    </nav>
    )
}