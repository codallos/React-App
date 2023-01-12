import logo from '../img/house.svg'
import './css/Header.css'

function Header() {

    

    return(
        <header className='header'>
            <nav className='header__nav'>
                <div className="header__img-container">
                    <img className="header__img" src={logo} alt="Logo" />
                </div>
                <div className="header__menu">
                    <ul className="header__ul">
                        <li className="header__li"> <a href="#">Contact</a></li>
                        <li className="header__li"> <a href="#">Free Quote</a></li>
                        <li className="header__li"><a href="#">How we work</a></li>
                        <li className="header__li"><a href="#">Services</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
    
}

export default Header