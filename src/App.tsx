import logoEP from "/src/assets/logoEnergia.png";
import { Carousel } from "./components/Carousel";
import { HamburgerMenu } from "./components/HamburgerMenu";

function App() {
	return (
		<>
			<div className="min-w-80 bg-green-900 border-b-2 border-yellow-400">
				<header className="relative h-24 md:h-28bg-green-900 flex items-center justify-around sm:justify-normal sm:px-4  lg:max-w-[1024px] lg:mx-auto  ">
					<img
						src={logoEP}
						className="w-16 md:w-24 "
					/>

					<div className="sm:hidden">
						<h1 className=" text-lg text-white">
							{" "}
							Associação Energia Pura
						</h1>

						<p className="text-center text-lg text-white ">
							Internacional
						</p>
					</div>

					<div className="hidden sm:flex sm:w-full sm:justify-center">
						<nav className="">
							<ul className="flex items-center gap-8 text-white">
								<li>
									<a
										href="#"
										className="hover:text-yellow-400">
										Notícias
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-yellow-400">
										Associação
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-yellow-400">
										Capoeira
									</a>
								</li>

								<li>
									<a
										href="#"
										className="hover:text-yellow-400">
										Projetos
									</a>
								</li>
								<li>
									<a
										href="#"
										className="hover:text-yellow-400">
										Mídias
									</a>
								</li>

								<li>
									<a
										href="#"
										className="hover:text-yellow-400">
										Contato
									</a>
								</li>
							</ul>
						</nav>
					</div>

					<HamburgerMenu />
				</header>
			</div>

			<main className=" min-w-80">
				<Carousel />
			</main>
		</>
	);
}

export default App;
