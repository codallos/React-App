import "./css/Footer.css";
import whatsappLogo from "../img/footer/Whatsapp.svg";
import twitterLogo from "../img/footer/twitter.svg";
import facebookLogo from "../img/footer/facebook.svg";
import instagramLogo from "../img/footer/instagram.svg";
import logo from "../img/house.svg";
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo">
                    <div className="footer__img-container">
                        <img className="footer__img-f" src={logo} alt="Logo" />
                    </div>

                    <p className="footer__description">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page whenters.
                    </p>

                    <div className="footer__social">
                        <div className="footer__twitter">
                            <img src={twitterLogo} alt="twitter" />
                        </div>
                        <div className="footer__facebook">
                            <img src={facebookLogo} alt="facebook" />
                        </div>
                        <div className="footer__instagram">
                            <img src={instagramLogo} alt="instagram" />
                        </div>
                    </div>
                </div>
                <div className="footer__about">
                    <h3 className="footer__title">About</h3>
                    <ul className="footer__ul">
                        <li className="footer__li">
                            <a className="footer__a" href="#">About</a>
                        </li>
                        <li className="footer__li">
                            <a className="footer__a" href="#">Privacy & Policy</a>
                        </li>
                        <li className="footer__li">
                            <a className="footer__a" href="#">Terms & Conditions</a>
                        </li>
                        <li className="footer__li">
                            <a className="footer__a" href="#">Faq</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__navigate">
                    <h3 className="footer__title">Navigate</h3>
                    <ul className="footer__ul">
                        <li className="footer__li">
                            <a className="footer__a" href="#">How We Work</a>
                        </li>
                        <li className="footer__li">
                            <a className="footer__a" href="#">Servicesy</a>
                        </li>
                        <li className="footer__li">
                            <a className="footer__a" href="#">Faq</a>
                        </li>
                        <li className="footer__li">
                            <a className="footer__a" href="#">Contact</a>
                        </li>
                        <li className="footer__li">
                            <a className="footer__a" href="#">Free Quote</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__contact footer__a-contact">
                    <h3 className="footer__title">Contact Us</h3>
                    <ul className="footer__ul">
                        <li className="footer__li footer__a-contact">
                            <a className="footer__a-contact" href="#">Ricardo Margain 444</a>
                        </li>
                        <li className="footer__li footer__a-contact">
                            <a className="footer__a-contact" href="#">Call: +52 81 1234 5678</a>
                        </li>
                        <li className="footer__li footer__a-contact">
                            <a className="footer__a-contact"  href="#">Email: info@challenge.com</a>
                        </li>
                        <li className="footer__li footer__a-contact footer__whatsapp">
                            <a className="footer__a-contact"  href="#">
                                <img className="footer__logo-whatsappf" src={whatsappLogo} alt="Whatsapp" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
