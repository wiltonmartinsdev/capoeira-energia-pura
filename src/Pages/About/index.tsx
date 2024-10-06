import AOS from "aos";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { Footer } from "@/components/Footer";
import gatoPreto from "@/assets/gatoPreto.jpg";
import graduationSystem from "@/assets/graduationSystem.jpg";
import logoEP from "@/assets/logoEnergia.png";
import rodaDeCapoeira from "@/assets/roda-de-capoeira.jpeg";
import uniform from "@/assets/uniform.jpg";

import "aos/dist/aos.css";

export function About() {
	useEffect(() => {
		const handleScroll = () => {
			AOS.init({
				duration: 1500,
			});
			AOS.refresh(); // Atualiza as animações com base no scroll
			console.log("Animação AOS inicializada após scroll!");

			// Remove o event listener de scroll após a primeira execução para que o AOS não seja reinicializado em cada scroll
			window.removeEventListener("scroll", handleScroll);
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup para garantir que o listener seja removido se o componente for desmontado antes do scroll
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className="min-w-80 bg-green-950 border-b-4 border-yellow-400 sticky top-0 z-50">
				<header className="relative h-28 md:h-28 bg-green-950 flex items-center justify-around sm:justify-normal sm:px-4  lg:max-w-[1024px] lg:mx-auto  ">
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
										to="/about"
										className={({ isActive }) =>
											isActive
												? "text-yellow-400"
												: "text-white"
										}>
										Sobre nós
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

			{/* Scroll Down */}
			<div className="relative h-screen scroll-smooth">
				<img
					src={rodaDeCapoeira}
					alt="Imagem de fundo"
					className="object-cover w-full h-screen"
				/>

				<div className="absolute inset-x-0 bottom-48 sm:bottom-36 flex justify-center">
					<div className="flex flex-col justify-center items-center text-white">
						<h2 className="sm:hidden">
							Toque ou Deslize para cima
						</h2>

						<h2 className="hidden sm:block">
							Clique ou Deslize para baixo
						</h2>

						<a href="#master">
							<svg
								className="block sm:hidden w-10 h-10 animate-bounce text-white"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M5 15l7-7 7 7"></path>
							</svg>

							<svg
								className="hidden sm:block w-10 h-10 animate-bounce text-white"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M19 9l-7 7-7-7"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<main>
				<section className="px-8">
					<h2
						id="master"
						className="my-4 text-3xl text-center font-bold scroll-mt-32"
						data-aos="fade-down">
						O Mestre Gato Preto
					</h2>

					<figure data-aos="fade-up">
						<img
							src={gatoPreto}
							alt="Foto do Mestre Gato Preto"
							className="w-full sm:w-1/2 mx-auto rounded-lg shadow-lg mb-1"
						/>

						<figcaption className="text-xs mb-4 sm:mb-8 sm:text-center">
							Jeremias Belo dos Santos, mais conhecido como Gato
							Preto, nasceu em 17 de abril de 1980, em Petrolina,
							Pernambuco.
						</figcaption>
					</figure>
					<div className="space-y-4 mb-8">
						<p>
							"Iniciei minha trajetória na capoeira aos 4 anos de
							idade, brincando no grupo Ginga do Corpo Negro no
							bairro do Cavaleiro, em Recife, treinava com amigos
							sob a orientação do meu tio, Instrutor Lito, que
							mais tarde se tornaria Mestre do grupo Aza Branca.
							Aos 5 anos, participei do meu primeiro batizado, um
							momento marcante que oficializou minha entrada no
							mundo da capoeira. Com a partida de Mestre Lito para
							São Paulo, continuei treinando em Recife com os
							alunos graduados do grupo e, posteriormente, em
							Maceió, Salvador e São Paulo em 1989. Nessa jornada,
							conheci diversos outros grupos de capoeira, o que me
							permitiu aprimorar ainda mais minhas técnicas.
						</p>

						<p>
							Em 1990, formamos um grupo de apresentações com
							outros alunos graduados do grupo Ginga do Corpo
							Negro e percorremos o Brasil mostrando nossa arte.
							Em 1992, viajei com meu irmão, Borrachinha, e o
							professor Estivador pelo norte do país, passando por
							Belém, Manaus e Macapá. Naquela época, a capoeira
							ainda era pouco conhecida na região, então decidimos
							começar a dar aulas. Em 1998, expandimos nossos
							horizontes e seguimos para a Guiana Francesa, depois
							para Martinica, Guadalupe e finalmente Paris, onde
							fizemos várias apresentações durante a Copa do Mundo
							de Futebol.
						</p>

						<p>
							Ao retornar ao Brasil, permaneci em Macapá para
							continuar meu trabalho na capoeira, fundando o grupo
							Malê. Em 1999, criamos a Associação de Capoeira Malê
							com Borrachinha e Estivador, que foi dissolvida em
							2002 devido a desentendimentos com o Mestre
							Estivador.
						</p>

						<p>
							Após isso, voltei a Recife, onde fui formado
							professor por Mestre João Mulatinho, presidente da
							Federação de Capoeira de Pernambuco, e passei no
							exame de professor, recebendo apoio e reconhecimento
							de muitos mestres. Em julho de 2003, participei de
							um encontro internacional de capoeira, organizado
							pelos grupos São Salomão e Alto Astral. A energia
							positiva desses eventos e o incentivo de diversos
							mestres me inspiraram a fundar o grupo de capoeira
							Energia Pura, em 25 de agosto de 2003. Retornei a
							Macapá e criei a Associação Energia Pura, com o
							objetivo de expandir a prática da capoeira no Amapá
							e torná-la reconhecida em todo o Brasil. Em 2004,
							atendendo a pedidos de alunos e graduados como
							Camaleão (do grupo Malê), estabelecemos filiais da
							Associação Energia Pura na Martinica e em Cayenne,
							Guiana Francesa, com a colaboração dos instrutores
							Jamanta e Borrachinha, que haviam sido meus alunos
							em Macapá.
						</p>

						<p>
							Desde 2005, dedico três meses por ano ao ensino da
							capoeira em Trento, na Itália. No dia 13 de julho de
							2007, recebi o título de Contra-Mestre pela
							Federação de Capoeira de Pernambuco, após um estágio
							com Mestre Mulatinho.
						</p>

						<p>
							Hoje, tanto no Brasil quanto na França, os alunos da
							Associação Energia Pura estão profundamente
							engajados, e temos inúmeros projetos para
							desenvolver a capoeira, promovendo-a tanto no âmbito
							educacional quanto cultural."
						</p>
					</div>
				</section>

				<section className="px-8 mb-8">
					<h2 className="text-2xl sm:text-3xl text-center font-bold mb-4" data-aos="fade-down">
						Sistema de Graduação
					</h2>

					<img
						src={graduationSystem}
						alt="Sistema de Graduação"
						className="w-full sm:w-1/2 mx-auto rounded-lg shadow-lg mb-1 border-2 border-black" data-aos="fade-up"
					/>
				</section>

				<section className="px-8 mb-8">
					<h2 className="text-3xl text-center font-bold mb-4" data-aos="fade-down">
						Uniforme
					</h2>

					<img
						src={uniform}
						alt="Uniforme da Capoeira"
						className="w-full sm:w-1/2 mx-auto rounded-lg shadow-lg mb-1 border-2 border-black" data-aos="fade-up"
					/>
				</section>
			</main>

			<Footer />
		</>
	);
}
