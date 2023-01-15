import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RemoveComment = () => {

    const { id } = useParams();
    const [comment, setComment] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:80/api/comments/" + id);
            const comment = await response.json();
            setComment(comment);
        })();
    }, [id]);

    const deleteComment = (e) => {
        e.preventDefault();

        fetch("http://localhost:80/api/comments" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        alert("Le commentaire a bien été supprimé.")
        // permet de supprimer de la liste le commentaire qui a été supprimé
        setArticle(comment.filter((comment) => comment.id !== id));
    };

    return (
        <>
            
        </>
    )
};
    

   

export default RemoveComment;