import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="sm:hidden">
			<Hamburger
				toggled={isOpen}
				toggle={setIsOpen}
				color="#facc15"
			/>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="absolute top-[76px] right-0 w-full z-50 bg-green-950 rounded-b-2xl ">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							Notícias
						</NavLink>

						<NavLink
							to="/about"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							Sobre nós
						</NavLink>

						<NavLink
							to="/capoeira"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							Capoeira
						</NavLink>

						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							Contato
						</NavLink>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
