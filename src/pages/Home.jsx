import Header from '../components/Header';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import BigFive from '../components/BigFive';
import GoToPark from './GoToPark';


import impala from '../assets/images/impala.jpg';
import lion from '../assets/images/lion.jpg';
import hyene from '../assets/images/hyene.jpg';
import buffle from '../assets/images/buffle3.jpg';


const Home = () => {
    return (
        <>
            <Header />
            <Banner />

            <section id ="presentation" className="presentation">
                <h2>Apprenez-en un peu plus sur nous...</h2>
                <div className="wrapper">
                    <div className="leftImg">
                        <img src={impala} alt="Impala" />
                        <img src={lion} alt="Lion" />
                    </div>
                    <div className="content">
                        <p>La réserve naturelle est située en Afrique du Sud, en plein cœur de la savane. Elle est connue pour abriter les "Big Five" de l'Afrique, c'est-à-dire le lion, l'éléphant, le rhinocéros, le buffle et le léopard. La réserve est également habitée par de nombreuses autres espèces animales, comme les girafes, les antilopes, les hyènes et les crocodiles.</p>
                        <p>Vous pourrez explorer la réserve en 4x4, en compagnie de guides locaux expérimentés qui connaissent bien les animaux et leur habitat. Vous pourrez également participer à des programmes de conservation et de recherche menés par des scientifiques professionnels.</p>
                        <p>La réserve est un lieu idéal pour ceux qui souhaitent découvrir la faune africaine et en apprendre davantage sur les efforts de conservation de la région. C'est un endroit précieux pour la préservation de l'écosystème local et la protection de la biodiversité.</p>
                    </div>
                    <div className="rightImg">
                        <img src={hyene} alt="Hyène" />
                        <img src={buffle} alt="Buffle" />
                    </div>
                </div>
            </section>
            <GoToPark />

            <BigFive />
            <Footer />
        </>
    )
};

export default Home;