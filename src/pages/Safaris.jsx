import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import style from '../modules/Safaris.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Safaris = () => {

    const [safaris, setSafaris] = useState([]);


    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:80/api/safaris');
            const safaris = await response.json();

            setSafaris(safaris);
        })();
    }, []);

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <>
            <Header />
            <h2>Découvrez nos safaris</h2>
            <div className={style.safarisWrapper}>
                {safaris.map((safari) => {
                    const date = new Date(safari.date);
                    return (
                        <article key = {safari.id} className={style.safari}>
                            <h1>Safari {safari.title}</h1>
                            <div className={style.content}>
                                <ul>
                                    <li><span>Prévu le : </span>{date.toLocaleString('fr-FR', dateOptions)}</li>
                                    <li><span>Places disponibles : </span>{safari.nb_places}</li>
                                    <li>{safari.description}</li>
                                    <li><span>Tarif : </span>{safari.tarif + "€/personne TTC"}</li>
                                </ul>
                            </div>
                            <Link to={"/reservation"} className={style.link}>Réserver</Link>
                        </article>
                    )
                })}
            </div>
            
            <Footer />
        </>
    )
};

export default Safaris;