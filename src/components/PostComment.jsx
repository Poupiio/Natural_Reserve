import { useNavigate } from "react-router-dom";
import style from '../modules/CommentForm.module.css';

const FormComment = () => {
    const navigate = useNavigate();

    const jwt = JSON.parse(localStorage.getItem('jwt'));
    console.log("Je suis bien connecté" + jwt);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const content = e.target.content.value;
        const user_pseudo = e.target.pseudo.value;
        const safari_title = e.target.safari.value;

        if (jwt) {
            fetch("http://localhost:80/api/comments", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + jwt
                },
                body: JSON.stringify({
                    content,
                    user_pseudo,
                    safari_title
            })
        })
            alert("Merci d'avoir donné votre avis !");
            navigate('/avis');

            e.target.content.value = "";
            e.target.pseudo.value = "";
            e.target.safari.value = "";
        } else {
            alert("Vous devez être connecté pour laisser un commentaire.");
            navigate("/connexion");
        }
        
    };

    return (
        <>
            <h2>Donnez-nous votre avis</h2>
            <div className={style.formWrapper}>
                <form onSubmit={handleSubmit}>
                    <div className="formContent">
                        <label>Quel est votre pseudo ?
                            <input type="text" name="pseudo" required />
                        </label>
                    </div>
                    <div className="formContent">
                        <label>Quel était le nom du safari ?
                            <input type="text" name="safari" required />
                        </label>
                    </div>
                    <div className="formContent">
                        <label>Dites-nous tout !
                            <textarea name="content" rows="7" required />
                        </label>
                    </div>
                    {/* <div className='formContent'>
                        <label>Voulez-vous ajouter une image ?
                            <input type="file" name="img" />
                        </label>
                    </div> */}
                    <button type="submit">Poster</button>
                </form>
            </div>
        </>
    )
};

export default FormComment;
