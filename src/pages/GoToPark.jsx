import style from '../modules/GoTo.module.css';

const GoToPark = () => {
    return (
        <section className={style.park}>
            <h2>Comment venir nous voir ?</h2>

            <div className={style.transports}>
                <article className={style.transport}>
                    <i class="fa-solid fa-plane"></i>
                    <h3>Par avion</h3>
                    <p>À seulement 80km au nord d’Hoedspruit, l’aéroport de Phalaborwavous donne accès au centre et au nord du parc. Avec plusieurs vols quotidiens depuis Johannesburg, il s’agit d’une ligne pratique pour qui ne souhaite pas faire les 5 à 6 heures de route depuis Johannesburg.</p>
                </article>

                <article className={style.transport}>
                    <i class="fa-solid fa-train"></i>
                    <h3>Par le train</h3>
                    <p>Vous avez la possibilité de vous rendre au parc en bus, en partant de la ville de Johannesburg, notamment avec les compagnies <a href="https://res.prasa.com/translux/booking" target="_blank" rel="noreferrer">Translux</a> ou <a href="https://citybug.co.za/" target="_blank" rel="noreferrer">Citybug</a>.</p>
                </article>

                <article className={style.transport}>
                    <i class="fa-solid fa-car-side"></i>
                    <h3>Par la route</h3>
                    <p>Pour la plupart des voyageurs français, la route se fait depuis l'aéroport de Johannesburg. Il faut compter 5 à 6 heures de route.</p>
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <p className={style.warning}>Certaines nationales sont des routes à péage qui n’accepte que de l’argent liquide ou les cartes bancaires locales.</p>
                </article>
            </div>
        </section>
    )
};

export default GoToPark;
