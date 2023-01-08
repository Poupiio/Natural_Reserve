import { Link } from 'react-router-dom';

import style from '../modules/BigFive.module.css';

const BigFive = () => {
    return (
        <>
            <section className={style.banner}>
                <h2>
                    <Link to="/especes" className={style.bigFive}>Découvrez les "Big Five"</Link>
                </h2>
            </section>
        </>
    )
};

export default BigFive;