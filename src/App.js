import { BrowserRouter, Routes, Route } from "react-router-dom";

import "swiper/css/bundle";

import Home from './pages/Home';
import Safaris from './pages/Safaris';
import Parc from './pages/Parc';
import Connexion from './pages/Connexion';
import Inscription from "./pages/Inscription";
import Profile from './pages/Profile';
import Avis from './pages/Avis';
import Contact from './pages/Contact';
import Especes from "./pages/Especes";
import Mammiferes from "./pages/Mammiferes";
import Oiseaux from "./pages/Oiseaux";
import Reptiles from "./pages/Reptiles";
import MentionsLegales from "./pages/MentionsLegales";
import Admin from "./pages/Admin";

const App = () => {
	return (
		<>
			<BrowserRouter>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/parc" element={<Parc />} />
					<Route path="/especes" element={<Especes />} />
					<Route path="/especes/mammiferes" element={<Mammiferes />} />
					<Route path="/especes/oiseaux" element={<Oiseaux />} />
					<Route path="/especes/reptiles" element={<Reptiles />} />
					<Route path="/safaris" element={<Safaris />} />
					<Route path="/connexion" element={<Connexion />} />
					<Route path="/inscription" element={<Inscription />} />
					<Route path="/myprofile" element={<Profile />} />
					<Route path="/avis" element={<Avis />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/mentionslegales" element={<MentionsLegales />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>

			</BrowserRouter>
		</>
	);
};


export default App;
