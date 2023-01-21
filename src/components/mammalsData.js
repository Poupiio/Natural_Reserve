import images from '../assets/images/images';

const mammalsData = [
	{
		title: "L'impala",
		image: images.impala,
		content: "Un impala est un mammifère appartenant à la famille des bovidés. C'est un animal assez grand, avec des bois allongés et recourbés, et une queue touffue. Il vit en Afrique, principalement dans les savanes, les forêts claires et les zones boisées. L'impala est un animal grégaire, qui vit en troupeaux. C'est un animal agile et rapide, capable de bondir jusqu'à trois mètres de haut et de parcourir de longues distances en sautant. L'impala est un herbivore, qui se nourrit principalement de feuilles, de fleurs et d'herbes. C'est un animal important dans les écosystèmes africains, car il est une source importante de nourriture pour de nombreux prédateurs."
	},
	{
		title: "Le lion",
		image: images.lion,
		content: "Le lion est un animal de la famille des félins. C'est un carnivore qui vit principalement en Afrique, bien que quelques lions aient également été introduits en Inde. Le lion est le plus grand des félins et est connu pour sa crinière luxuriante. Les lions vivent en groupes appelés 'coalitions' et sont principalement actifs la nuit. Les mâles sont les protecteurs du groupe et sont chargés de chasser pour nourrir le reste de la coalition. Les femelles sont en charge de la reproduction et de l'élevage des petits. Les lions sont des animaux emblématiques et sont considérés comme les rois de la savane africaine.",
	},
	{
		title: "La hyène",
		image: images.hyene,
		content: "Les hyènes sont des animaux de la famille des Hyaenidae, qui comprend également les civettes et les mangoustes. Elles sont principalement présentes en Afrique, mais on les trouve également en Asie et en Europe. Ce sont des carnivores et sont connues pour chasser en bandes pour dépecer des carcasses. Elles ont des mâchoires puissantes et des dents très acérées qui leur permettent de déchiqueter leur nourriture. Les hyènes sont souvent perçues comme des animaux agressifs et peu sociables, mais elles jouent également un rôle important dans l'écosystème en aidant à nettoyer les restes de nourriture et à réguler les populations d'autres espèces."
	},
	{
		title: "Le buffle",
		image: images.buffle,
		content: "Le buffle est un animal de la famille des Bovidae, qui comprend également les vaches, les antilopes et les gazelles. Il est principalement présent en Afrique et en Asie. Le buffle est un animal herbivore et est connu pour sa force et sa résistance. Il a un corps massif et une tête large avec des cornes courbées. Les buffles vivent en troupeaux et sont souvent associés aux marécages et aux plaines inondables, bien qu'on puisse également les trouver dans des zones plus sèches. Ils sont parfois chassés pour leur viande, leur cuir et leurs cornes, qui sont utilisées dans la fabrication de bijoux et d'objets décoratifs. Ils sont également connus pour être agressifs et dangereux pour les humains qui s'approchent trop près d'eux."
	},
	{
		title: "L'hippopotame",
		image: images.hippo,
		content: "L'hippopotame est un animal de la famille des Hippopotamidae, qui comprend également les pygmées hippopotames. Ils sont principalement présents en Afrique, où ils vivent dans les eaux peu profondes des rivières et des marais. Les hippopotames sont des herbivores et passent la plupart de leur temps dans l'eau pour se protéger du soleil et des prédateurs. Ils ont un corps massif avec une peau épaisse et sont connus pour leur gros museau et leurs grandes dents qui dépassent de leur bouche. Bien qu'ils soient généralement pacifiques, les hippopotames peuvent être très agressifs et dangereux lorsqu'ils se sentent menacés. Ils sont considérés comme une espèce en danger d'extinction en raison de la perte de leur habitat et de la chasse illégale."
	},
	{
		title: "Le jaguar",
		image: images.jag,
		content: "Le jaguar est un animal de la famille des félins. C'est un carnivore qui vit en Amérique du Sud et dans certaines parties de l'Amérique centrale. C'est le plus grand félin d'Amérique et est connu pour sa force et sa souplesse. Il a un pelage rayé de noir et de orange, ce qui lui permet de se fondre dans les ombres de la jungle. Les jaguars sont des chasseurs solitaires et sont capables de tuer des proies beaucoup plus grandes qu'eux, comme les caïmans et les anacondas. Ils sont également importants pour l'écosystème car ils aident à réguler les populations de proies et à maintenir l'équilibre de la bioarticleersité dans les forêts tropicales. Les jaguars sont menacés d'extinction en raison de la perte de leur habitat et de la chasse illégale."
	},
	{
		title: "La panthère noire",
		image: images.panthere,
		content: "La panthère noire est un jaguar ou un léopard à la robe particulièrement sombre. Contrairement à ce que son nom laisse entendre, la panthère noire n'est pas une espèce à part entière mais plutôt une variante de couleur de ces deux espèces. La panthère noire a une robe noire qui lui permet de se fondre dans l'obscurité et de mieux surprendre ses proies. Elle est principalement présente en Amérique du Sud et en Afrique. La panthère noire est un animal solitaire et discret qui chasse principalement la nuit. Elle est connue pour sa souplesse, sa vitesse et sa force exceptionnelles, qui lui permettent de tuer des proies beaucoup plus grandes qu'elle. Les panthères noires sont menacées d'extinction en raison de la perte de leur habitat et de la chasse illégale."
	},
	{
		title: "Le rhinocéros",
		image: images.rhino,
		content: "Le rhinocéros est un animal de la famille des Rhinocerotidae. Il existe cinq espèces de rhinocéros dans le monde, dont deux sont présentes en Afrique et trois en Asie. Le rhinocéros est un herbivore et a un corps massif avec une peau épaisse et cornée. Il est connu pour sa grosse tête et ses cornes, qui sont utilisées pour se défendre contre les prédateurs et pour se frayer un chemin dans la végétation dense. Les rhinocéros sont des animaux solitaires et peuvent parcourir de grandes distances pour trouver de l'eau et de la nourriture. Ils sont menacés d'extinction en raison de la chasse illégale pour leurs cornes, qui sont très prisées dans certaines régions du monde pour leur utilisation dans la médecine traditionnelle et la fabrication de bijoux."
	},
	{
		title: "L'antilope",
		image: images.antilope,
		content: "Les antilopes sont des animaux de la famille des Bovidae, qui comprend également les vaches, les buffles et les gazelles. Elles sont principalement présentes en Afrique et en Asie. Les antilopes ont un corps mince et agile et sont connues pour leur vitesse et leur agilité. Elles ont de grandes cornes qui leur servent à se défendre contre les prédateurs. Il existe de nombreuses espèces d'antilopes, chacune ayant ses propres caractéristiques et habitudes de vie. Certaines vivent en troupeaux, tandis que d'autres sont solitaires. Les antilopes sont des herbivores et se nourrissent principalement de feuilles, d'herbes et de petits arbustes. Elles sont souvent chassées pour leur viande et leur peau, ce qui a contribué à la déforestation et à la perte de leur habitat."
	},
	{
		title: "La girafe",
		image: images.girafe,
		content: "La girafe est un animal de la famille des Giraffidae. Elle est la plus grande des espèces de mammifères et est caractérisée par son long cou et ses jambes très hautes. Elle est principalement présente en Afrique, où elle vit dans les savanes et les forêts claires. La girafe est un herbivore et se nourrit principalement de feuilles et de branches d'arbres. Elle a une langue très longue qui lui permet de atteindre les feuilles les plus hautes. Les girafes vivent en troupeaux et sont généralement pacifiques, mais les mâles peuvent être très agressifs lorsqu'ils se battent pour le territoire ou pour une femelle. Les girafes sont menacées d'extinction en raison de la déforestation et de la chasse illégale."
	}
];

export default mammalsData;