import { BrowserRouter, Routes, Route } from "react-router-dom";

import "swiper/css/bundle";

import Home from './pages/Home';
import Safaris from './pages/Safaris';
import Profile from './pages/Profile';
import Comments from './pages/Comments';
import Contact from './pages/Contact';
import Reservation from './pages/Reservation';
import Species from "./pages/Species";
import Mammals from "./pages/Mammals";
import Birds from "./pages/Birds";
import Reptils from "./pages/Reptils";
import MentionsLegales from "./pages/MentionsLegales";
import Admin from "./pages/Admin";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";

const App = () => {
	return (
		<>
			<BrowserRouter>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/especes" element={<Species />} />
					<Route path="/especes/mammiferes" element={<Mammals />} />
					<Route path="/especes/oiseaux" element={<Birds />} />
					<Route path="/especes/reptiles" element={<Reptils />} />
					<Route path="/safaris" element={<Safaris />} />
					<Route path="/reservation" element={<Reservation />} />
					<Route path="/connexion" element={<LogIn />} />
					<Route path="/inscription" element={<SignUp />} />
					<Route path="/myprofile" element={<Profile />} />
					<Route path="/avis" element={<Comments />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/mentionslegales" element={<MentionsLegales />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>

			</BrowserRouter>
		</>
	);
};


export default App;
