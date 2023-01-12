import { Link } from "react-router-dom";

import image from '../assets/images/logo.svg';


const Footer = () => {
    return (
        <footer>
            <div className="logo">
                <img src={image} alt="Logo Natural Reserve" />
            </div>
            <div className="listContainer">
                <div className="links">
                    <ul>
                        <li>
                        <Link to={'/mentionslegales'}>Mentions Légales</Link>
                        </li>
                        <li>
                            <Link to={'/contact'}>Contactez-nous</Link>
                        </li>
                        <li>
                            <Link to={'/avis'}>Les avis de nos aventuriers</Link>
                        </li>
                    </ul>
                </div>
                <div className="socialMedias">
                    <a href="https://www.tiktok.com/fr/" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-tiktok"></i>
                    </a>
                    <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>  
                </div>
            </div>
            <p>Copyright ©2022 Natural Reserve. All rights reserved</p>
        </footer>
    )
};


export default Footer;