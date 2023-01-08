import style from '../modules/ContactForm.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Header />

            <form className={style.contact}>
                <div className={style.left}>
                    <label>Nom et prénom
                        <input type="text" />
                    </label>
                    <label>Email
                        <input type="email" />
                    </label>
                </div>
                <div className={style.right}>
                    <label>Votre message
                        <textarea rows="5" cols="40" required></textarea>
                    </label>
                </div>
                <div className={style.btn}>
                    <button type="submit">Envoyer</button>
                </div>
            </form>

            <Footer />
        </>
    )
};

export default Contact;