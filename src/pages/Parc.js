import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../modules/Parc.module.css';

const Parc = () => {
    return (
        <>
            <Header />

            <section id="parc">
                <h2>Comment se rendre au parc ?</h2>
                <div className={style.frameContainer}>
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    <i class="fa-solid fa-plane"></i>
                    <i class="fa-solid fa-bed"></i>
                </div>
                <p></p>
            </section>

            <Footer />
        </>
    )
};

export default Parc;