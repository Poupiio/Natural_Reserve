import { useNavigate } from 'react-router';

import style from '../modules/Contact.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Merci, votre message a bien été envoyé !");
        navigate("/safaris");
    }

    return (
        <>
            <Header />
            <h2>Une question ?</h2>
            <div className={style.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <div className="formContent">
                        <label>Nom et prénom
                            <input type="text" name="name" required />
                        </label>
                    </div>
                    <div className="formContent">
                        <label>Email
                            <input type="email" name="email" required />
                        </label>
                    </div>
                    <div className='formContent'>
                        <textarea name="content" rows="7" cols="50" placeholder="Tapez votre message ici" required />
                    </div>
                    <button type="submit">Envoyer</button>
                </form>
            </div>

            <Footer />
        </>
    )
};

export default Contact;