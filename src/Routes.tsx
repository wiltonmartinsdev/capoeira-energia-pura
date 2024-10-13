import { Routes, Route } from "react-router-dom";

import { About } from "./Pages/About";
import { Capoeira } from "./Pages/Capoeira";
import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";

export function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>

			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="/capoeira"
				element={<Capoeira />}
			/>

			<Route
				path="/contact"
				element={<Contact />}
			/>
		</Routes>
	);
}
