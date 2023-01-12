import style from '../modules/GoTo.module.css';

const GoTo = () => {
    return (
        <section id="park" className={style.park}>
            <h2>Comment venir nous voir ?</h2>
            <div className={style.icons}>
                <i class="fa-sharp fa-solid fa-location-dot"></i>
                <i class="fa-solid fa-plane"></i>
                <i class="fa-solid fa-train"></i>
            </div>
        </section>
    )
};

export default GoTo;