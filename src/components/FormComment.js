import style from '../modules/CommentForm.module.css';

const FormComment = () => {

    const onSubmit = (e) => {
        e.preventDefault();

        const pseudo = e.target.pseudo.value;
        const content = e.target.content.value;
        const img = e.target.img.value;

        fetch('http://localhost:80/api/comments', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                pseudo,
                content,
                img
            })
        });
    };

    return (
        <>
            <h2>Donnez-nous votre avis</h2>
            <div className={style.formWrapper}>
                <form onSubmit={onSubmit}>
                    <div className="formContent">
                        <label>Quel est votre pseudo ?
                            <input type="text" name="pseudo" required />
                        </label>
                    </div>
                    <div className="formContent">
                        <label>Dites-nous tout !
                            <textarea name="content" rows="7" required />
                        </label>
                    </div>
                    <div className='formContent'>
                        <label>Voulez-vous ajouter une image ?
                            <input type="file" name="img" />
                        </label>
                    </div>
                    <button type="submit">Poster</button>
                </form>
            </div>
        </>
    )
};

export default FormComment;
