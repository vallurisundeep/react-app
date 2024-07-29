import './header.css'
import logo from '../../assets/images/logo.png';
const Header = ()=>{
    return <header>
        <div className="logo">
            <img src={logo}  alt="logo"/>
        </div>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </header>;
}

export default Header;