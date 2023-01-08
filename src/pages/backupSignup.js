import { Link, Navigate } from "react-router-dom";
import { useState, useRef } from "react";

import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../modules/Log.module.css';


const Inscription = () => {

    const emailInputRef = useRef();
    const nameInputRef = useRef();
    const pseudoInputRef = useRef();
    const passwordInputRef = useRef();
    const repasswordInputRef = useRef();

    const [data, setData] = useState();
    const [goToHome, setGoToGome] = useState();

    if (goToHome) {
        return <Navigate to="/" />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Je récupère les données du formulaire
        const email = emailInputRef.current.value;
        const name = nameInputRef.current.value;
        const pseudo = pseudoInputRef.current.value;
        const password = passwordInputRef.current.value;
        const repassword = repasswordInputRef.current.value;

        const fetchHandler = async () => {
            const response = await fetch("http://localhost:80/api/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    pseudo: pseudo,
                    password: password,
                    repassword: repassword
                })
            });

            const dataResponse = await response.json();

            setData(dataResponse);
        };

        fetchHandler();
     
        // Je vide les champs
        emailInputRef.current.value = "";
        nameInputRef.current.value = "";
        pseudoInputRef.current.value = "";
        passwordInputRef.current.value = "";
        repasswordInputRef.current.value = "";

        setGoToGome(true);
    };


    return (
        <>
            <Header />
        
            <main>
                <form onSubmit={handleSubmit} className={style.login}>
                    <h2>S'inscrire</h2>
                        <div className={style.formInput}>
                            <input type='email' name='email' ref={emailInputRef} placeholder="Email" required />
                    
                            <input type='text' name='name' ref={nameInputRef} placeholder="Nom et prénom" required />

                            <input type='text' name='pseudo' ref={pseudoInputRef} placeholder="Choisissez un pseudo" required />

                            <input type='password' name='password' ref={passwordInputRef} placeholder="Mot de passe" required />

                            <input type='password' name='repassword' ref={repasswordInputRef} placeholder="Confirmation mot de passe" required />
                        </div>
                    <button type='submit' className={style.button}>S'inscrire</button>
                    <p>Déjà inscrit ?</p>
                    <p className={style.link}>
                        <Link to={"/connexion"} className="p">Cliquez ici pour vous connecter</Link>
                    </p>
                </form>
            </main>
            
            <Footer />
        </>
    )
};


export default Inscription;