import { Link, Navigate } from "react-router-dom";
import { useState, useRef } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../modules/Log.module.css';

const Connexion = () => {
    
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [data, setData] = useState();
    // const [goToHome, setGoToGome] = useState();

    // if (goToHome) {
    //     return <Navigate to="/" />
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Je récupère les données du formulaire
        const email = emailInputRef.current.value;
        const password = passwordInputRef.current.value;

        const fetchHandler = async () => {
            const response = await fetch("http://localhost:80/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const dataResponse = await response.json();

            setData(dataResponse);
        };
        
        fetchHandler();
        
        // Je vide les champs
        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        
        // setGoToGome(true);
    };

    console.log(data);

    return (
        <>
            <Header />
        
            <main>
                <form onSubmit={handleSubmit} className={style.login}>
                    <h2>Se connecter</h2>
                    <div className={style.formInput}>
                        <input type='email' name='email' ref={emailInputRef} required placeholder="Email" />
                        <input type='password' name='password' ref={passwordInputRef} required placeholder="Mot de passe" />
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