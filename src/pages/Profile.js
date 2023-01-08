import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
    return (
        <>
        <Header />
            <h2>Mon profil</h2>
            <h3>Mes infos :</h3>
            <ul>
                <li>Mon adresse email</li>
                <li>Mon pseudo :</li>
            </ul>
        <Footer />
        </>
    )
};

export default Profile;