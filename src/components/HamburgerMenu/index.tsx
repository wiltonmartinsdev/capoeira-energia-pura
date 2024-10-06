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
						className="absolute top-28 right-0 w-full z-50 bg-green-950 border-t-2 border-yellow-400 rounded-b-2xl ">
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
							to="/projects"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							Projetos
						</NavLink>

						<NavLink
							to="/medias"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							Mídias
						</NavLink>

						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							Galeria de Fotos/vídeos
						</NavLink>

						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							Faça sua Inscrição
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
