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




// nav ul {
// 	display: flex;
// 	justify-content: center;
// 	background-color: #5F8D4E;
// }

// nav img {
// 	width: 50%;
// }

// nav ul a {
// 	text-transform: uppercase;
// 	color: #5E4026;
// 	font-family: 'Hanalei', cursive;
// 	font-size: 1.5rem;
// }

// nav ul li:last-child a {
// 	text-transform: uppercase;
// 	color: #FFB30B;
// 	font-family: 'Hanalei', cursive;
// 	font-size: 1.5rem;
// }

// nav ul a::after {
// 	content: "";
// 	display: block;
// 	background-color: #E6DDC4;
// 	border-radius: 50%;
// 	width: 0;
// 	height: 2px;
// 	margin: 0.5rem auto 0;
// 	transition: all 0.3s ease;
// }

// nav ul li:hover:not(:first-child) a::after {
// 	content: "";
// 	display: block;
// 	background-color: #E6DDC4;
// 	border-radius: 50%;
// 	width: 70%;
// 	height: 2px;
// 	margin: 0.5rem auto 0;
// }

// .listItem {
// 	padding: 3rem 0;
// }

// .listItem:not(:last-child) {
// 	margin-right: 4rem;
// }