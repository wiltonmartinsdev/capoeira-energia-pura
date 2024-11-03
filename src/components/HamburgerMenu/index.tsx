import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

export const HamburgerMenu = () => {
	const { t } = useTranslation();

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
						className="font-roboto-flex font-black italic absolute top-[164px] right-0 w-full z-50 bg-green-950 rounded-b-2xl ">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							{t("Notícias")}
						</NavLink>

						<NavLink
							to="/about"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							{t("Sobre nós")}
						</NavLink>

						<NavLink
							to="/capoeira"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							{t("Capoeira")}
						</NavLink>

						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							{t("Contato")}
						</NavLink>

						<NavLink
							to="/store"
							className={({ isActive }) =>
								`${
									isActive ? "text-yellow-400" : "text-white"
								} block px-4 py-2`
							}>
							{t("Loja EP")}
						</NavLink>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
