import { Link, useNavigate } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../modules/Log.module.css';

const Connexion = () => {
   
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Je récupère les données du formulaire
        const email = e.target.email.value;
        const password = e.target.password.value;

        fetch("http://localhost:80/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        
        // Je vide les champs
        e.target.email.value = "";
        e.target.password.value = "";

        navigate('/');
    };

    return (
        <>
            <Header />
        
            <main>
                <form onSubmit={handleSubmit} className={style.login}>
                    <h2>Se connecter</h2>
                    <div className={style.formInput}>
                        <input type='email' name='email' required placeholder="Email*" />
                        <input type='password' name='password' required placeholder="Mot de passe*" />
                    </div>
                    <button type="submit" className={style.button}>Connexion</button>
                    <p>Pas encore inscrit ?</p>
                    <p className={style.link}>
                        <Link to={"/inscription"}>Cliquez ici pour créer un compte</Link>
                    </p>
                </form>
            </main>
            
            <Footer />
        </>
    )
};


export default Connexion;