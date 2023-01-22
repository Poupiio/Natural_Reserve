import { useNavigate } from 'react-router';
import style from '../modules/LogOut.module.css';

const LogOut = () => {

    const navigate = useNavigate();

    const logOut = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <button className={style.disconnect} onClick={logOut}>Se déconnecter</button>
    )
};


export default LogOut;