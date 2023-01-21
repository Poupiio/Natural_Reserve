import { Link } from 'react-router-dom';

// Import des composants jsx et du fichier CSS
import Header from '../components/Header';
import Footer from '../components/Footer';

import style from '../modules/Especes.module.css';


const Mammals = (props) => {

    // Je crée une variable pour ne pas répéter à chaque fois 'props.datas'
    const datas = props.datas;

    return (
        <>
            <Header />
            <h2>Les mammifères</h2>
            <div id="mammiferes" className={style.articlesWrapper}>
                {/* Je fais une boucle sur chaque objet du tableau mammalsData du fichier mammalsData.js */}
                {datas.map((data) => {
                    return (
                        <article className={style.article}>
                            <img src={data.image} alt={data.title} />
                            <h1>{data.title}</h1>
                            <p>{data.content}</p>
                        </article>
                    )
                })}
            </div>
            <div className={style.listLinks}>
                <ul>
                    <li>
                        <button>
                            <Link to="/especes/oiseaux">Voir les Oiseaux</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/especes/reptiles">Voir les Reptiles</Link>
                        </button>
                    </li>
                </ul>
            </div>
            
            <Footer />
        </>
    )
};

export default Mammals;