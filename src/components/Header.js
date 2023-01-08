import { Link } from "react-router-dom";

import logo from '../assets/images/logo.svg';

const Header = () => {
    
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to={"/"}>
                            <img src={logo} alt="Logo Natural Reserve" />
                        </Link>
                    </li>
                    <li className="listItem">
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li className="listItem">
                        <Link to={"/parc"}>Le parc</Link>
                    </li>
                    <li className="listItem">
                        <Link to={"/especes"}>Espèces</Link>
                    </li>
                    <li className="listItem">
                        <Link to={"/safaris"}>Safaris</Link>
                    </li>
                    <li className="listItem">
                        <Link to={"/connexion"}>Se connecter</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;