import { Routes, Route } from "react-router-dom";

import { Association } from "./Pages/Association";
import { Capoeira } from "./Pages/Capoeira";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Medias } from "./Pages/Medias";
import { Projects } from "./Pages/Projects";

export function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>

			<Route
				path="/association"
				element={<Association />}
			/>
			<Route
				path="/capoeira"
				element={<Capoeira />}
			/>
			<Route
				path="/projects"
				element={<Projects />}
			/>
			<Route
				path="/medias"
				element={<Medias />}
			/>
			<Route
				path="/contact"
				element={<Contact />}
			/>
		</Routes>
	);
}
