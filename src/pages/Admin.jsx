import Header from '../components/Header';
import style from '../modules/Admin.module.css';

const Admin = () => {
    return (
        <>
        <Header />
            <h2>Bienvenue, admin !</h2>

            <table className={style.admin}>
               <thead>
                    <tr>
                        <th colspan="6" className={style.entity}>Users</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th colspan="2">Voir tous</th>
                        <th colspan="2">Voir 1</th>
                        <th colspan="2">Supprimer</th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button className={style.action}>
                                <i class="fa-solid fa-eye"></i>
                            </button>
                        </td>
                        <td colspan="2">
                            <button className={style.action}>
                                <i class="fa-solid fa-eye"></i>
                            </button>
                        </td>
                        <td colspan="2">
                            <button className={style.trash}>
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <th colspan="6" className={style.entity}>Commentaires</th>
                    </tr>
                    <tr>
                        <th colspan="2">Voir tous</th>
                        <th colspan="2">Voir 1</th>
                        <th colspan="2">Supprimer</th>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button className={style.action}>
                                <i class="fa-solid fa-eye"></i>
                            </button>
                        </td>
                        <td colspan="2">
                            <button className={style.action}>
                                <i class="fa-solid fa-eye"></i>
                            </button>
                        </td>
                        <td colspan="2">
                            <button className={style.trash} onClick={() => {}}>
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>

                    <tr>
                        <th colspan="6" className={style.entity}>Safaris</th>
                    </tr>
                    <tr>
                        <th>Ajouter</th>
                        <th>Modifier</th>
                        <th>Voir tous</th>
                        <th>Voir 1</th>
                        <th>Supprimer</th>
                    </tr>
                    <tr>
                        <td>
                            <button className={style.action}>
                            <i class="fa-solid fa-plus"></i>
                            </button>
                        </td>
                        <td>
                            <button className={style.action}>
                                <i class="fa-solid fa-pen"></i>
                            </button>
                        </td>
                        <td>
                            <button className={style.action}>
                                <i class="fa-solid fa-eye"></i>
                            </button>
                        </td>
                        <td>
                            <button className={style.action}>
                                <i class="fa-solid fa-eye"></i>
                            </button>
                        </td>
                        <td>
                            <button className={style.trash}>
                                <i class="fa-solid fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
};

export default Admin;