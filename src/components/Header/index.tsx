import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import logoEP from "@/assets/logoEP.png";
import ShoppingCartIcon from "@/assets/shoppingCartIcon.svg";
import UserAccountIcon from "@/assets/userAccountIcon.svg";

import { HamburgerMenu } from "../HamburgerMenu";
import { LanguageSelection } from "../LanguageSelection";

export function Header() {
	const { t } = useTranslation();

	return (
		<header className="min-w-80 bg-green-950 border-b-4 border-yellow-400 sticky top-0 z-50">
			<LanguageSelection />

			<div className="flex justify-around sm:absolute right-0 text-white gap-14 sm:gap-6 sm:px-8 xl:gap-8 xl:justify-end xl:px-10">
				<DropdownMenu>
					<DropdownMenuTrigger className="flex items-center gap-2">
						<img
							src={UserAccountIcon}
							alt=""
						/>

						<div className="flex flex-col">
							<span>Minha conta</span>
							<span className="text-left font-roboto-flex font-black">
								Acessar
							</span>
						</div>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="">
						<DropdownMenuSeparator />
						<DropdownMenuItem>Login</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Cadastrar</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>

				<img
					src={ShoppingCartIcon}
					alt=""
				/>
			</div>

			<section className="flex justify-around items-center my-1">
				<img
					src={logoEP}
					alt=""
					className="w-52 h-10 xl:w-96 xl:h-auto xl:mx-auto"
				/>
				<HamburgerMenu />
			</section>

			<div className="hidden sm:flex sm:w-full sm:justify-center my-6">
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
		</header>
	);
}
