import { AnimatePresence, motion } from "framer-motion";
import { Divide as Hamburger } from "hamburger-react";
import { useState } from "react";

export const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="sm:hidden">
			<Hamburger
				toggled={isOpen}
				toggle={setIsOpen}
			/>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.5 }}
						className="absolute top-24 right-0 w-full bg-green-900 border-t border-yellow-400 min-h-screen">
						<a
							href="#"
							className="block px-4 py-2 text-white hover:text-yellow-400">
							Notícias
						</a>

						<a
							href="#"
							className="block px-4 py-2 text-white hover:text-yellow-400">
							Sobre a Associação
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-white hover:text-yellow-400">
							Capoeira
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-white hover:text-yellow-400">
							Cultura
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-white hover:text-yellow-400">
							Projetos
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-white hover:text-yellow-400">
							Galeria de Fotos/Vídeos
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-white hover:text-yellow-400">
							Faça sua Inscrição
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-white hover:text-yellow-400">
							Contato
						</a>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
