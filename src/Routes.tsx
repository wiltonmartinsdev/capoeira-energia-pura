import { Routes, Route } from "react-router-dom";

import { ScrollToTop } from "@/components/ScrollToTop";
import { About } from "@/Pages/About";
import { Capoeira } from "@/Pages/Capoeira";
import { Contact } from "@/Pages/Contact";
import { Home } from "@/Pages/Home";
import { Store } from "@/Pages/Store";

export function AppRoutes() {
	return (
		<>
			<ScrollToTop />
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

				<Route
					path="/store"
					element={<Store />}
				/>
			</Routes>
		</>
	);
}
