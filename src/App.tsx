import { Button } from "./components/ui/button";
import logoEP from "/src/assets/logoEnergia.png";
import batucadaBgCard from "./assets/batucadaBgCard.png";
import capoeiraBgCard from "./assets/capoeiraBgCard.png";
import sambaxeBgCard from "./assets/sambaxeBgCard.png";
import { Carousel } from "./components/Carousel";
import { HamburgerMenu } from "./components/HamburgerMenu";

function App() {
	return (
		<>
			<div className="min-w-80 bg-green-900 border-b-2 border-yellow-400">
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

			<main className="min-w-80">
				<Carousel />

				<h1 className="text-green-900 text-3xl text-center uppercase font-bold mb-2">
					A Associação
				</h1>

				<div className="text-left px-4">
					<p className="mb-4">
						Bem-vindo ao site da{" "}
						<span className="font-bold italic">
							Associação Energia Pura Internacional.
						</span>
					</p>

					<p className="mb-4">
						Nosso grupo tem como objetivo divulgar e desenvolver o
						jogo da Capoeira e as atividades a ela como: canto,
						música, dança e organizar o ensino dessa atividade
						(aulas técnicas, jogos, demonstrações, shows e estágios)
					</p>

					<div className="text-center mb-16">
						<Button> Saiba mais...</Button>
					</div>
				</div>

				<h2 className="text-green-900 text-3xl text-center uppercase font-bold mb-8">
					Um pouco das nossas atividades...
				</h2>

				<section className=" px-4 sm:flex sm:justify-between">
					<article className="flex flex-col mb-6">
						<h2 className="text-green-900 text-xl uppercase font-bold">
							Capoeira
						</h2>

						<div className="card flex ">
							<img
								src={capoeiraBgCard}
								alt=""
								className="object-fit rounded-2xl"
							/>

							<Button className="card-button">
								Saiba mais...
							</Button>
						</div>

						<div className="w-full sm:w-[500px] pl-2">
							<p className="mb-4">
								A capoeira é uma expressão cultural fascinante
								que une luta, dança, jogo, canto e ritmo. É uma
								prática envolvente e completa, além de ser uma
								excelente porta de entrada para a rica cultura
								brasileira, que convidamos você a conhecer.
							</p>

							<p className="mb-4">
								Os cursos do{" "}
								<span className="font-bold italic">
									Mestre Gato Preto
								</span>{" "}
								são voltados para todas as idades, desde
								crianças até adultos, tanto para iniciantes
								quanto para praticantes experientes.
							</p>

							<p className="mb-2">
								Experimente! A primeira aula é gratuita!
							</p>
							<div className="flex justify-end">
								<Button className="w-24">Saiba mais...</Button>
							</div>
						</div>
					</article>

					<article className="flex flex-col mb-6">
						<h2 className="text-green-900 text-xl uppercase font-bold">
							Batucada
						</h2>

						<div className="card flex ">
							<img
								src={batucadaBgCard}
								alt=""
								className="object-cover rounded-2xl"
							/>

							<Button className="card-button">
								Saiba mais...
							</Button>
						</div>

						<div className="w-full sm:w-[500px] px-4">
							<p className="mb-4">
								Originária do Rio de Janeiro, a batucada é uma
								tradição pulsante da percussão brasileira,
								profundamente enraizada no espírito do carnaval
								e na energia contagiante do samba.
							</p>

							<p className="mb-2">
								Sob a direção do{" "}
								<span className="font-bold italic">
									Professor Marco
								</span>{" "}
								o grupo acolhe participantes de todos os níveis,
								do iniciante ao mais experiente.
							</p>

							<div className="flex justify-end">
								<Button className="w-24">Saiba mais...</Button>
							</div>
						</div>
					</article>

					<article className="flex flex-col">
						<h2 className="text-green-900 text-xl uppercase font-bold">
							Sambaxé
						</h2>
						<div className="card flex ">
							<img
								src={sambaxeBgCard}
								alt=""
								className="object-cover rounded-2xl"
							/>

							<Button className="card-button">
								Saiba mais...
							</Button>
						</div>

						<div className="w-full sm:w-[500px] px-4">
							<p className="mb-4">
								A Associação Energia Pura oferece uma vibrante
								seção de dança efêmera liderada pela talentosa{" "}
								<span className="font-bold italic">
									Amandine Zabumba.
								</span>
							</p>

							<p>
								O ponto alto dessa experiência é a participação
								nos desfiles do Carnaval da Guiana Francesa, ao
								lado do grupo de percussão BATUQUE AE. Juntos,
								eles criam um espetáculo inesquecível, cheio de
								ritmo, cores e alegria.
							</p>

							<div className="flex justify-end">
								<Button className="w-24">Saiba mais...</Button>
							</div>
						</div>
					</article>
				</section>
			</main>
		</>
	);
}

export default App;
