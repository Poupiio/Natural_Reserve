import { useState, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import style from '../modules/Avis.module.css';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FormComment from '../components/FormComment';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:80/api/comments');
            const comments = await response.json();

            setComments(comments);
        })();
    }, []);

    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    return (
        <>
            <Header />

            <h2>Ce qu'ils en ont pensé</h2>
                <Carousel className={style.comments} autoPlay infiniteLoop interval={5000} showStatus={false}>
                    {comments.map((comment) => {
                        const date = new Date(comment.posted_at);
                        return (
                            <article key={comment.id}>
                                <p>{comment.content}</p>
                                <h4>Commentaire posté par : {comment.user_pseudo}</h4>
                                <h5>le {date.toLocaleDateString('fr-FR', dateOptions)}</h5> 
                                <h5>pour le safari {comment.safari_title}</h5> 
                            </article>
                        )
                    })}
                 </Carousel>
            <FormComment />
            <Footer />
        </>
    )
};

export default Comments;