import { Link } from "react-router-dom";

import Header from '../components/Header';
import Footer from '../components/Footer';

const Especes = () => {
    return (
        <>
            <Header />
            <h2>Les espèces présentes dans le parc</h2>
            <div className='especes'>
                <div className='espece'>
                    <Link to={"/especes/mammiferes"}>Mammifères</Link>
                </div>
                <div className='espece'>
                    <Link to={"/especes/oiseaux"}>Oiseaux</Link>
                </div>
                <div className='espece'>
                    <Link to={"/especes/reptiles"}>Reptiles</Link>
                </div>
            </div>
            <Footer />
        </>
    )
};


export default Especes;