import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../modules/MentionsLegales.module.css';

const MentionsLegales = () => {
    return (
        <>
            <Header />
            <h2>Mentions légales</h2>
            <ul className={style.list}>
                <li>
                    <span>E-mail : </span>elise.maaiza@lapiscine.pro
                </li>
                <li>
                    <span>Site web : </span>www.natural-reserve.fr
                </li>
                <li>
                    <span>Directeur de la publication : </span>Madame Elise MAAÏZA
                </li>
            </ul>
            
            <Footer />
        </>
    )
};

export default MentionsLegales;
