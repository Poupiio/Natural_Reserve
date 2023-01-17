import { Link, useNavigate} from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../modules/Log.module.css';


const SignUp = () => {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        // Pour que la page ne s'actualise pas au submit
        e.preventDefault();
    
        // Je récupère les données du formulaire
        const email = e.target.email.value;
        const name = e.target.name.value;
        const pseudo = e.target.pseudo.value;
        const password = e.target.password.value;
        const repassword = e.target.repassword.value;

        if (password !== repassword) {
            alert("Vos mots de passe ne sont pas identiques");
        } else {
            fetch("http://localhost:80/api/signup", {
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
            })
            alert("Votre compte a bien été enregistré !");
            navigate('/');
        };
        
        // Je vide les champs
        e.target.email.value = "";
        e.target.name.value = "";
        e.target.pseudo.value = "";
        e.target.password.value = "";
        e.target.repassword.value = "";
    };

    return (
        <>
            <Header />
            <main>
                <section className={style.authForm}>
                    <form onSubmit={handleSubmit}>
                        <h2>S'inscrire</h2>
                        <div className={style.formInput}>
                            <input type='email' name='email' placeholder="Email*" required />
                    
                            <input type='text' name='name' placeholder="Nom et prénom*" required />

                            <input type='text' name='pseudo' placeholder="Choisissez un pseudo*" required />

                            <input type='password' name='password' placeholder="Mot de passe*" required />

                            <input type='password' name='repassword' placeholder="Confirmation mot de passe*" required />
                        </div>
                        <div className={style.formBtn}>
                            <button type='submit' className={style.button}>S'inscrire</button>
                        </div>
                        <p>Déjà inscrit ?</p>
                        <p className={style.link}>
                            <Link to={"/connexion"} className="p">Cliquez ici pour vous connecter</Link>
                        </p>
                    </form>
                </section>
            </main>
            <Footer />
        </>
    )
};


export default SignUp;