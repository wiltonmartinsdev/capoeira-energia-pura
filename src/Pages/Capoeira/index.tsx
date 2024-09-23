import { NavLink } from "react-router-dom";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import logoEP from "@/assets/logoEnergia.png";

export function Capoeira() {
	return (
		<>
			<div className="min-w-80 bg-green-900 border-b-4 border-yellow-400 sticky top-0 z-50">
				{" "}
				<header className="relative h-28 md:h-28bg-green-900 flex items-center justify-around sm:justify-normal sm:px-4  lg:max-w-[1024px] lg:mx-auto  ">
					<img
						src={logoEP}
						className="w-16 md:w-24 "
					/>

					<div className="sm:hidden">
						<h1 className=" text-lg text-white">
							{" "}
							Associação Energia Pura
						</h1>

						<p className="text-center text-lg text-white">
							Internacional
						</p>
					</div>

					<div className="hidden sm:flex sm:w-full sm:justify-center">
                    <nav>
							<ul className="flex items-center gap-8 text-white">
								<li>
									<NavLink
										to="/"
										className={({ isActive }) =>
										isActive
											? "text-yellow-400"
											: "text-white"
									}>
										Notícias
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/association"
										className={({ isActive }) =>
										isActive
											? "text-yellow-400"
											: "text-white"
									}>
										Associação
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/capoeira"
										className={({ isActive }) =>
										isActive
											? "text-yellow-400"
											: "text-white"
									}>
										Capoeira
									</NavLink>
								</li>

								<li>
									<NavLink
										to="/projects"
										className={({ isActive }) =>
										isActive
											? "text-yellow-400"
											: "text-white"
									}>
										Projetos
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/medias"
										className={({ isActive }) =>
										isActive
											? "text-yellow-400"
											: "text-white"
									}>
										Mídias
									</NavLink>
								</li>

								<li>
									<NavLink
										to="/contact"
										className={({ isActive }) =>
										isActive
											? "text-yellow-400"
											: "text-white"
									}>
										Contato
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>

					<HamburgerMenu />
				</header>
			</div>
		</>
	);
}
