import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../modules/Especes.module.css';

import alligator from '../assets/images/alligator.jpg';
import croco from '../assets/images/croco_nain.jpg';
import boa from '../assets/images/boa.jpg';
import python from '../assets/images/python.jpg';
import cobra from '../assets/images/cobra.jpeg';
import lezMur from '../assets/images/lezard_murailles.jpeg';
import lezVert from '../assets/images/lezard_vert.jpg';
import tortue from '../assets/images/tortue.jpeg';

const Reptils = () => {
    return (
        <>
            <Header />
            <h2>Les reptiles</h2>
            <div className={style.articlesWrapper}>
                <article className={style.article}>
                    <img src={alligator} alt="Alligator" />
                    <h1>L'alligator</h1>
                    <p>Les alligators sont des reptiles de la famille des Alligatoridae. Ils sont principalement présents en Amérique du Nord et en Chine. Les alligators ont un corps massif et une peau épaisse et cornée. Ils ont de longues mâchoires et de grandes dents qui leur permettent de tuer et de déchiqueter leur nourriture. Les alligators sont des carnivores et se nourrissent principalement de poissons, d'oiseaux et de mammifères. Ils vivent dans les marécages, les rivières et les lacs et sont capables de se déplacer rapidement dans l'eau. Les alligators sont souvent craints par les humains en raison de leur réputation de prédateurs dangereux, mais ils sont généralement pacifiques et ne s'approchent pas des humains s'ils ne sont pas menacés.</p>
                </article>
                <article className={style.article}>
                    <img src={croco} alt="Crocodile nain" />
                    <h1>Le crocodile nain</h1>
                    <p>Le crocodile nain est un petit crocodile de la famille des Crocodylidae. Il mesure généralement entre 1 et 1,5 mètre de long et pèse moins de 25 kg. Le crocodile nain est principalement présent en Amérique centrale et en Amérique du Sud, où il vit dans les marécages et les rivières. C'est un carnivore qui se nourrit principalement de poissons et d'oiseaux, mais il peut également manger des petits mammifères et des reptiles. Le crocodile nain a une peau épaisse et cornée et des dents acérées qui lui permettent de tuer et de déchiqueter sa nourriture. Il est généralement pacifique et ne s'approche pas des humains, mais il peut devenir agressif s'il se sent menacé. Les crocodiles nains sont parfois capturés et vendus comme animaux de compagnie, bien que cela soit illégal dans de nombreux pays.</p>
                </article>
                <article className={style.article}>
                    <img src={boa} alt="Boa" />
                    <h1>Le boa</h1>
                    <p>Le boa est un reptile de la famille des Boidae. Il est principalement présent en Amérique du Sud, en Afrique et en Asie. Le boa est un constricteur et se nourrit principalement de mammifères et d'oiseaux, qu'il tue en les étouffant avec ses anneaux de corps. Le boa a un corps long et mince et est capable de se déplacer rapidement grâce à ses muscles puissants. Il a une peau épaisse et lisse et des dents acérées qui lui permettent de mordre et de déchiqueter sa nourriture. Le boa est un animal nocturne et est généralement pacifique, mais il peut devenir agressif s'il se sent menacé. Les boas sont parfois capturés et vendus comme animaux de compagnie, bien que cela soit illégal dans de nombreux pays.</p>
                </article>
                <article className={style.article}>
                    <img src={python} alt="Python royal" />
                    <h1>Le python royal</h1>
                    <p>Le python royal est un reptile de la famille des Pythonidae. Il est principalement présent en Afrique, en Asie et en Australie. C'est l'un des plus gros serpents du monde et peut atteindre une longueur de plus de 7 mètres. Le python royal est un constricteur et se nourrit principalement de mammifères et d'oiseaux, qu'il tue en les étouffant avec ses anneaux de corps. Il a une peau épaisse et lisse et des dents acérées qui lui permettent de mordre et de déchiqueter sa nourriture. Le python royal est un animal nocturne et est généralement pacifique, mais il peut devenir agressif s'il se sent menacé. Les pythons royaux sont parfois capturés et vendus comme animaux de compagnie, bien que cela soit illégal dans de nombreux pays.</p>
                </article>
                <article className={style.article}>
                    <img src={cobra} alt="Cobra" />
                    <h1>Le cobra</h1>
                    <p>Le cobra est un serpent de la famille des Elapidae. Il est principalement présent en Afrique et en Asie. Le cobra est un serpent venimeux et est connu pour sa capacité à cracher du venin à une distance de plusieurs mètres. Il a un corps long et mince et est capable de se déplacer rapidement grâce à ses muscles puissants. Le cobra a une peau épaisse et lisse et des dents acérées qui lui permettent de mordre et de déchiqueter sa nourriture. Le cobra est un animal solitaire et est généralement pacifique, mais il peut devenir agressif s'il se sent menacé. Il se nourrit principalement de petits mammifères et d'oiseaux, qu'il tue en injectant du venin dans leur corps. Les cobras sont parfois capturés et vendus comme animaux de compagnie, bien que cela soit illégal dans de nombreux pays.</p>
                </article>
                <article className={style.article}>
                    <img src={lezMur} alt="Lézard des murailles" />
                    <h1>Le lézard des murailles</h1>
                    <p>Le lézard des murailles est un reptile de la famille des Agamidae. Il est principalement présent en Afrique et en Asie. Le lézard des murailles a un corps long et mince et est capable de grimper aux murs et aux arbres grâce à ses griffes rétractables. Il a une peau épaisse et lisse et des dents acérées qui lui permettent de mordre et de déchiqueter sa nourriture. Le lézard des murailles est principalement actif la journée et se nourrit principalement d'insectes et de petits vertébrés. C'est un animal solitaire et est généralement pacifique, mais il peut devenir agressif s'il se sent menacé. Les lézards des murailles sont parfois capturés et vendus comme animaux de compagnie, bien que cela soit illégal dans de nombreux pays.</p>
                </article>
                <article className={style.article}>
                    <img src={lezVert} alt="Lézard vert occidental" />
                    <h1>Le lézard vert occidental</h1>
                    <p>Le lézard vert occidental est un reptile de la famille des Lacertidae. Il est principalement présent en Europe, en Afrique du Nord et en Asie Occidentale. Le lézard vert occidental a un corps long et mince et est capable de grimper aux arbres grâce à ses griffes rétractables. Il a une peau épaisse et lisse et des dents acérées qui lui permettent de mordre et de déchiqueter sa nourriture. Le lézard vert occidental est principalement actif la journée et se nourrit principalement d'insectes et de petits vertébrés. C'est un animal solitaire et est généralement pacifique, mais il peut devenir agressif s'il se sent menacé. Les lézards verts occidentaux sont parfois capturés et vendus comme animaux de compagnie, bien que cela soit illégal dans de nombreux pays.</p>
                </article>
                <article className={style.article}>
                    <img src={tortue} alt="Tortue éperonnée d'Afrique" />
                    <h1>La tortue éperonnée d'Afrique</h1>
                    <p>La tortue éperonnée d'Afrique est un reptile de la famille des Testudinidae. Elle est principalement présente en Afrique et est connue pour sa carapace épaisse et ses éperons acérés. La tortue éperonnée d'Afrique est un animal terrestre et se nourrit principalement de feuilles, d'herbes et de petits fruits. Elle a une peau épaisse et lisse et est capable de se déplacer lentement grâce à ses pattes puissantes. La tortue éperonnée d'Afrique est un animal solitaire et est généralement pacifique, mais elle peut devenir agressive lorsqu'elle se sent menacée. Elle est parfois capturée et vendue comme animal de compagnie, bien que cela soit illégal dans de nombreux pays. Les tortues éperonnées d'Afrique sont également menacées d'extinction en raison de la déforestation et de la chasse illégale.</p>
                </article>
            </div>
            <div className={style.listLinks}>
                <ul>
                    <li>
                        <button>
                            <Link to="/especes/oiseaux">Voir les Oiseaux</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/especes/mammiferes">Voir les Mammifères</Link>
                        </button>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    )
};

export default Reptils;