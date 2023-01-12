import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import style from '../modules/Especes.module.css';

import autruche from '../assets/images/autruche.jpeg';
import paon from '../assets/images/paon.jpeg';
import vautour from '../assets/images/vautour.jpg';
import pie from '../assets/images/pie.jpg';
import flamand from '../assets/images/flamand.jpg';
import faucon from '../assets/images/faucon.jpg';
import fou from '../assets/images/fou.jpg';

const Birds = () => {
    return (
        <>
            <Header />
            <h2>Les oiseaux</h2>
            <div className={style.articlesWrapper}>
                <article className={style.article}>
                    <img src={autruche} alt="Autruche" />
                    <h1>L'autruche</h1>
                    <p>L'autruche est un oiseau gigantesque qui mesure environ 2,7 mètres de haut et qui pèse environ 150 kg. Elle vit dans les savanes et les plaines arides d'Afrique de l'Est et du Sud. L'autruche est caractérisée par son long cou et ses jambes très longues et minces. Elle est capable de courir très rapidement grâce à ses jambes musclées, atteignant des vitesses allant jusqu'à 70 km/h.</p>
                    <p>L'autruche est le plus grand oiseau au monde et elle est également capable de voler, bien que ses ailes soient trop petites pour lui permettre de s'envoler. Elle se nourrit principalement de feuilles et de fruits, mais elle peut aussi manger des insectes et des petits animaux.</p>
                    <p>Les autruches sont généralement solitaires, mais elles peuvent vivre en petits groupes de quelques inarticleidus. Les femelles pondent de grandes œufs ovales qui sont incubés par les mâles. Une fois éclos, les poussins sont protégés par les parents et apprennent rapidement à se déplacer et à se nourrir seuls.</p>
                    <p>En général, l'autruche est considérée comme une espèce pacifique et craintive, mais elle peut devenir agressive si elle est menacée ou si elle se sent en danger. Elle peut alors donner des coups de bec ou des coups de pied avec ses puissantes pattes.</p>
                </article>
                <article className={style.article}>
                    <img src={paon} alt="Paon" />
                    <h1>Le paon</h1>
                    <p>Le paon est un oiseau de la famille des phasianidés, connus pour leur longue queue colorée et leur plumage éclatant. Le paon mâle est particulièrement spectaculaire, avec un grand nombre de plumes longues et brillantes qui forment une queue en forme de parapluie. Ces plumes sont principalement bleues et vertes, mais elles peuvent aussi être rouges, jaunes et violettes. Le paon mâle a également une crête de plumes sur la tête et des taches bleues sur le visage.</p>
                    <p>Le paon est originaire d'Asie et d'Afrique, mais il est maintenant élevé dans de nombreuses parties du monde pour sa beauté. Il mesure environ 1,5 mètre de long et pèse environ 6 kg. Le paon est un oiseau omnivore qui se nourrit principalement de graines, de fruits et d'insectes.</p>
                    <p>Le paon est connu pour sa parade nuptiale, au cours de laquelle le mâle déploie sa longue queue et fait des roucoulements pour attirer les femelles. Les femelles pondent de petits œufs ovales qui sont incubés par les mâles. Les paons sont des oiseaux grégaires et ils vivent généralement en petits groupes dans les forêts et les jardins.</p>
                </article>
                <article className={style.article}>
                    <img src={vautour} alt="Vautour" />
                    <h1>Le vautour</h1>
                    <p>Le vautour est un oiseau de proie qui se nourrit principalement de charognes et de restes animaux. Il est connu pour son bec large et puissant, ses serres acérées et son nez recourbé qui lui permet de sentir les odeurs à distance. Le vautour a également de grandes ailes qui lui permettent de voler de manière aérodynamique et de parcourir de longues distances sans effort.</p>
                    <p>Il existe de nombreuses espèces de vautours dans le monde, qui vivent dans des habitats très différents, des déserts aux forêts tropicales. Les vautours mesurent généralement entre 1 et 1,5 mètre de haut et ils pèsent entre 3 et 10 kg. Ils sont généralement de couleur foncée, avec des ailes larges et des queues courtes.</p>
                    <p>Le vautour est un oiseau solitaire et territorial, qui chasse et se nourrit seul. Il est également connu pour être un excellent observateur et un chasseur patient, qui attend que sa proie soit suffisamment faible ou vulnérable avant de l'attaquer. Les vautours sont des animaux importants pour l'environnement, car ils aident à nettoyer les déchets et à prévenir la propagation des maladies.</p>
                </article>
                <article className={style.article}>
                    <img src={pie} alt="Pie grièche à poitrine orange" />
                    <h1>La pie grièche à poitrine orange</h1>
                    <p>La Pie grièche à poitrine orange (Lanius senilis) est un oiseau de la famille des Laniidae. Elle mesure environ 20 cm de long et pèse environ 60 g. Elle est caractérisée par son plumage gris et noir, avec une poitrine et une tête rouge-orange vif. La Pie grièche à poitrine orange est originaire d'Eurasie et d'Afrique du Nord, mais elle est maintenant présente dans de nombreuses parties du monde, grâce à sa grande capacité d'adaptation. Elle vit dans les forêts, les parcs et les jardins, où elle se nourrit principalement de petits insectes et de graines. C'est un oiseau très agile et vif, qui se déplace rapidement d'un arbre à l'autre. Elle est également très territoriale et défensive de son territoire, et elle peut être agressive envers les intrus. Elle est connue pour son chant mélodieux et pour sa grande intelligence.</p>
                </article>
                <article className={style.article}>
                    <img src={flamand} alt="Flamand rose" />
                    <h1>Le flamand rose</h1>
                    <p>Le Flamand rose (Phoenicopterus ruber) est une espèce d'oiseau de la famille des Phoenicopteridae, connue pour son plumage rose vif et sa forme caractéristique de spatule. Le Flamand rose mesure environ 1 mètre de long et pèse environ 3 kg. Il a des pattes courtes et des ailes larges et plongeantes, ce qui lui permet de voler de manière économique et de nager rapidement.</p>
                    <p>Le Flamand rose est originaire d'Amérique du Sud et d'Afrique, mais il est maintenant présent dans de nombreuses parties du monde, où il vit dans les marais, les lacs et les étangs salés. Il se nourrit principalement de petits crustacés et de mollusques, qu'il attrape en plongeant la tête sous l'eau. C'est un oiseau grégaire et sociable, qui vit en grandes colonies et qui est connu pour sa grande loyauté envers sa famille et son groupe. Il est également très affectueux et protecteur envers ses petits, qu'il couve et nourrit avec soin. Le Flamand rose est considéré comme une espèce menacée dans certains endroits, en raison de la dégradation de son habitat et de la pollution de l'eau.</p>
                </article>
                <article className={style.article}>
                    <img src={faucon} alt="Faucon" />
                    <h1>Le faucon</h1>
                    <p>Le faucon est un rapace appartenant à la famille des Falconidae. Comme l'aigle, il est reconnu pour sa vue exceptionnelle et sa capacité à chasser et à capturer sa proie avec précision. Il existe de nombreuses espèces de faucons dans le monde, mais toutes ont en commun des caractéristiques physiques similaires :
                        <ul>
                            <li>Un corps mince et allongé, avec des ailes courtes et pointues ;</li>
                            <li>Un bec et des serres puissants, qui leur servent à tuer et à dépecer leur proie;</li>
                            <li>Un plumage généralement gris ou brun, avec des parties claires sur le ventre et la poitrine.</li>
                        </ul>
                    Les faucons sont des animaux solitaires, qui vivent principalement dans les milieux ouverts (prairies, déserts, savanes) et les forêts claires. Ils se nourrissent principalement de petits mammifères et d'oiseaux, qu'ils capturent en plongeant sur eux à très haute vitesse. Ils sont également utilisés pour la chasse depuis l'Antiquité, en raison de leur agilité et de leur capacité à suivre la course de leur proie.</p>
                </article>
                <article className={style.article}>
                    <img src={fou} alt="Fou du Cap" />
                    <h1>Les fous du Cap</h1>
                    <p>Les fous du Cap, aussi connus sous le nom de "penguins du Cap", sont une espèce d'oiseaux marins qui se trouvent principalement en Afrique du Sud, au Cap de Bonne-Espérance. Ils font partie de la famille des Spheniscidae, qui comprend également les manchots. Les fous du Cap ont un aspect physique très distinctif :
                        <ul>
                            <li>Ils ont un corps mince et allongé, avec des pattes courtes et des ailes très courtes et très larges, qui leur servent à nager sous l'eau ;</li>
                            <li>Leur plumage est noir sur le dos et blanc sur le ventre, ce qui leur permet de se camoufler dans l'eau ;</li>
                            <li>Ils ont un bec court et pointu, qui leur sert à pêcher et à se défendre.</li>
                        </ul>
                    Les fous du Cap se nourrissent principalement de poissons et de calmars, qu'ils capturent en plongeant sous l'eau. Ils vivent en colonies sur les côtes rocheuses et les îles, où ils se reproduisent et élèvent leurs petits. Ils sont menacés par la pêche intensive, la pollution et le changement climatique, et sont protégés par diverses lois et accords internationaux.</p>
                </article>
            </div>
            <div className={style.listLinks}>
                <ul>
                    <li>
                        <button>
                            <Link to="/especes/mammiferes">Voir les Mammifères</Link>
                        </button>
                    </li>
                    <li>
                        <button>
                            <Link to="/especes/reptiles">Voir les Reptiles</Link>
                        </button>
                    </li>
                </ul>
            </div>
            <Footer />
        </>
    )
};

export default Birds;