import {
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

import logoEP from "@/assets/logoEP.png";

import { DropdownMenu, DropdownMenuItem } from "../ui/dropdown-menu";
import { HamburgerMenu } from "../HamburgerMenu";
import { LanguageSelection } from "../LanguageSelection";

export function Header() {
	const { t } = useTranslation();

	const location = useLocation();

	return (
		<header className="min-w-80 bg-green-950 border-b-4 border-yellow-400 sticky top-0 z-50">
			<LanguageSelection />
			<section className="flex justify-around items-center">
				<img
					src={logoEP}
					alt=""
					className="w-40 h-8 xl:w-96 xl:h-auto xl:mx-auto"
				/>
				<HamburgerMenu />
			</section>

			<div className="hidden sm:flex sm:w-full sm:justify-center">
				<nav>
					<ul className="font-roboto-flex font-black italic flex items-center gap-8 text-white">
						<li>
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "text-yellow-400" : "text-white"
								}>
								{t("Notícias")}
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive ? "text-yellow-400" : "text-white"
								}>
								{t("Sobre nós")}
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/capoeira"
								className={({ isActive }) =>
									isActive ? "text-yellow-400" : "text-white"
								}>
								{t("Capoeira")}
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									isActive ? "text-yellow-400" : "text-white"
								}>
								{t("Contato")}
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/store"
								className={({ isActive }) =>
									isActive ? "text-yellow-400" : "text-white"
								}>
								{t("Loja EP")}
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>

			{location.pathname === "/store" && (
				<>
					<DropdownMenu>
						<DropdownMenuTrigger className="w-32">
							Minha Conta
						</DropdownMenuTrigger>
						<DropdownMenuContent className="flex">
							<DropdownMenuSeparator />
							<DropdownMenuItem>Login</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Cadastrar</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<div>
						<h1>Carinho</h1>
					</div>
				</>
			)}
		</header>
	);
}
