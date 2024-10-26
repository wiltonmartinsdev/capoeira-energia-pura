import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";

import logoEP from "@/assets/logoEnergia.png";

import { HamburgerMenu } from "../HamburgerMenu";

export function Header() {
	const { t } = useTranslation();

	return (
		<header className="relative mb-4 bg-green-950 flex justify-around items-center sm:justify-normal sm:px-4 sm:flex-nowrap lg:max-w-[1024px] lg:mx-auto">
			<Link to="/">
				<img
					src={logoEP}
					className="pl-2 w-16 md:pl-0"
				/>
			</Link>

			<div className="sm:hidden">
				<h1 className=" text-lg text-center text-white">
					{t("Associação Energia Pura Internacional")}
				</h1>
			</div>

			<div className="hidden sm:flex sm:w-full sm:justify-center">
				<nav>
					<ul className="flex items-center gap-8 text-white">
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
					</ul>
				</nav>
			</div>

			<HamburgerMenu />
		</header>
	);
}
