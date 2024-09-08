import { HamburgerMenu } from "./components/HamburgerMenu/HamburgerMenu";
import logoEP from "/src/assets/logoEnergia.png";

function App() {
	return (
		<>
			<div className="min-w-80 bg-green-900">
				<header className=" h-24 relative bg-green-900 flex items-center justify-around sm:justify-normal sm:px-4  lg:max-w-[1024px] lg:mx-auto  ">
					<img
						src={logoEP}
						className="w-16"
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
							<ul className="flex items-center gap-8 text-white ">
								<li>
									<a
										href="#"
										className="">
										Notícias
									</a>
								</li>
								<li>
									<a href="#">Associação</a>
								</li>
								<li>
									<a href="#">Capoeira</a>
								</li>

								<li>
									<a href="#">Projetos</a>
								</li>
								<li>
									<a href="#">Mídias</a>
								</li>

								<li>
									<a href="#">Contato</a>
								</li>
							</ul>
						</nav>
					</div>

					<HamburgerMenu />
				</header>
			</div>

			<main className=" min-w-80 border border-red-600 lg:w-[1024px] lg:mx-auto">
				<h1>Hello World!</h1>
			</main>
		</>
	);
}

export default App;
