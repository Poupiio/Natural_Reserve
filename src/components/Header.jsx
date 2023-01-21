import { Link } from "react-router-dom";

import logo from '../assets/images/logo.svg';
import style from '../modules/Header.module.css';

const Header = () => {
    
    return (
        <header>
            <nav className={style.mainMenu}>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <img src={logo} alt="Logo Natural Reserve" />
                        </Link>
                    </li>
                    <li className={style.listItem}>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className={style.listItem}>
                        <Link to={"/especes"}>Espèces</Link>
                    </li>
                    <li className={style.listItem}>
                        <Link to={"/safaris"}>Safaris</Link>
                    </li>
                    <li className={style.listItem}>
                        <Link to={"/avis"}>Ce qu'ils en pensent</Link>
                    </li>
                    <li className={style.listItem}>
                        <Link to={"/connexion"}>Se connecter</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;