import { Link, useNavigate } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../modules/Log.module.css';

const LogIn = () => {
   
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Je récupère les données du formulaire
        const email = e.target.email.value;
        const password = e.target.password.value;

        const jwtResponse = await fetch("http://localhost:80/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const loginData = await jwtResponse.json();
            console.log(loginData);
        
        if (loginData.role === "user") {
            localStorage.setItem('jwt', JSON.stringify(loginData));
            navigate('/');
        } else if (loginData.role === "admin") {
            localStorage.setItem('jwt', JSON.stringify(loginData));
            navigate('/admin');
        } else {
            navigate("/");
        };
        
        
        // Je vide les champs
        e.target.email.value = "";
        e.target.password.value = "";

        navigate('/');
    };

    return (
        <>
            <Header />
        
            <main>
                <section className={style.authForm}>
                    <form onSubmit={handleSubmit}>
                        <h2>Se connecter</h2>
                        <div className={style.formInput}>
                            <input type='email' name='email' required placeholder="Email*" />
                            <input type='password' name='password' required placeholder="Mot de passe*" />
                        </div>
                        <div className={style.formBtn}>
                            <button type="submit" className={style.button}>Connexion</button>
                        </div>
                        <p>Pas encore inscrit ?</p>
                        <p className={style.link}>
                            <Link to={"/inscription"}>Cliquez ici pour créer un compte</Link>
                        </p>
                    </form>
                </section>
            </main>
            
            <Footer />
        </>
    )
};


export default LogIn;