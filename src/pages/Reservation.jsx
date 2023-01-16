import { useNavigate } from 'react-router';
import { useState } from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import style from '../modules/Reservation.module.css';

const ReservationForm = () => {
    const navigate = useNavigate();

    const [safariSelected, setSafariSelected] = useState();
    const [numSelected, setNumSelected] = useState();

    const handleChange = (event) => {
        setSafariSelected(event.target.value);
        setNumSelected(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const safari = safariSelected;
        const places = numSelected;
        const email = e.target.email.value;
        const name = e.target.name.value;
        
        fetch("http://localhost:80/api/reservations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                safari,
                places,
                name,
                email
            })
        });
        alert("Votre demande de réservation a bien été enregistrée. Elle sera traitée dans les meilleurs délais.");
        navigate("/safaris");
    }

    return (
        <div className={style.bgi}>
            <Header />
            <h2>Réserver un safari</h2>
            <div className={style.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <div className="formContent">
                        <p>Pour quel safari souhaitez-vous effectuer une réservation ?</p>
                        <input type="radio" name="safari" value="Standard" onChange={handleChange} />
                        <label className={style.label}>Standard</label>

                        <input type="radio" name="safari" value="Deluxe" onChange={handleChange} />
                        <label className={style.label}>Deluxe</label>

                        <input type="radio" name="safari" value="Premium" onChange={handleChange} />
                        <label className={style.label}>Premium</label>

                        <input type="radio" name="safari" value="Platinum" onChange={handleChange} />
                        <label className={style.label}>Platinum</label>
                    </div>
                    <div className="selectNumber">
                        <p>Nombre de places souhaitées :</p>
                        <input type="number" name="places" min="1" max="6" onChange={handleChange} required />
                    </div>
                    <div className="formContent">
                        <label>Vos nom et prénom
                            <input type="text" name="name" required />
                        </label>
                    </div>
                    <div className="formContent">
                        <label>Votre adresse email
                            <input type="email" name="email" required />
                        </label>
                    </div>
                    <button type="submit">Réserver</button>
                </form>
            </div>

            <Footer />
        </div>
    )
};

export default ReservationForm;



