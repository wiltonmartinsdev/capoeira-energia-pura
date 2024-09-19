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
			<div className="min-w-80 bg-green-900 border-b-4 border-yellow-400 sticky top-0 z-50">
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

			<main className="min-w-80 xl:max-w-[1920px] mx-auto">
				<Carousel />

				<h1 className="text-green-900 text-3xl text-center uppercase font-bold mb-2">
					A Associação
				</h1>

				<div className="text-left px-4 sm:px-20 lg:max-w-[1518px] lg:mx-auto">
					<p className="mb-4 text-center">
						Bem-vindo ao site da <br />
						<span className="font-bold italic">
							Associação Energia Pura Internacional.
						</span>
					</p>

					<p className="mb-4 pl-5">
						Nosso grupo tem como missão divulgar, preservar e
						promover o rico universo da Capoeira, destacando não
						apenas a prática do jogo em si, mas também suas
						expressões culturais associadas, como o canto, a música
						e a dança. Acreditamos que a Capoeira é muito mais do
						que um esporte ou arte marcial — ela é uma manifestação
						cultural e histórica que carrega em si valores de
						ancestralidade, resistência e comunidade.
					</p>

					<div className="text-center mb-16 ">
						<Button> Saiba mais...</Button>
					</div>
				</div>

				<h2 className="text-green-900 text-3xl text-center uppercase font-bold px-4 mb-8">
					Um pouco das nossas atividades...
				</h2>

				<section className="max-w-[1430px] mx-auto px-8 sm:px-20 xl:flex xl:justify-around">
					<article className="flex flex-col mb-6 ">
						<h2 className="text-green-900 text-xl uppercase font-bold mb-3">
							Capoeira
						</h2>

						<div className="card flex ">
							<img
								src={capoeiraBgCard}
								alt=""
								className="w-full rounded-2xl"
							/>

							<Button className="card-button">
								Saiba mais...
							</Button>
						</div>

						<div className="w-full xl:w-96 pl-2">
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

							<p className="mb-4 lg:mb-0 xl:mb-4">
								Experimente! A primeira aula é gratuita!
							</p>
							<div className="flex justify-center">
								<Button>Saiba mais...</Button>
							</div>
						</div>
					</article>

					<article className="flex flex-col mb-6">
						<h2 className="text-green-900 text-xl uppercase font-bold mb-3">
							Batucada
						</h2>

						<div className="card flex ">
							<img
								src={batucadaBgCard}
								alt=""
								className="w-full rounded-2xl"
							/>

							<Button className="card-button">
								Saiba mais...
							</Button>
						</div>

						<div className="w-full xl:w-96 px-4">
							<p className="mb-4">
								Originária do Rio de Janeiro, a batucada é uma
								tradição pulsante da percussão brasileira,
								profundamente enraizada no espírito do carnaval
								e na energia contagiante do samba.
							</p>

							<p className="mb-4">
								Sob a direção do{" "}
								<span className="font-bold italic">
									Professor Marco
								</span>{" "}
								o grupo acolhe participantes de todos os níveis,
								do iniciante ao mais experiente.
							</p>

							<div className="flex justify-center">
								<Button>Saiba mais...</Button>
							</div>
						</div>
					</article>

					<article className="flex flex-col">
						<h2 className="text-green-900 text-xl uppercase font-bold mb-3">
							Sambaxé
						</h2>
						<div className="card flex ">
							<img
								src={sambaxeBgCard}
								alt=""
								className="w-full rounded-2xl"
							/>

							<Button className="card-button">
								Saiba mais...
							</Button>
						</div>

						<div className="w-full xl:w-96 px-4">
							<p className="mb-4">
								A Associação Energia Pura oferece uma vibrante
								seção de dança efêmera liderada pela talentosa{" "}
								<span className="font-bold italic">
									Amandine Zabumba.
								</span>
							</p>

							<p className="mb-4">
								O ponto alto dessa experiência é a participação
								nos desfiles do Carnaval da Guiana Francesa, ao
								lado do grupo de percussão BATUQUE AE. Juntos,
								eles criam um espetáculo inesquecível, cheio de
								ritmo, cores e alegria.
							</p>

							<div className="flex justify-center">
								<Button>Saiba mais...</Button>
							</div>
						</div>
					</article>
				</section>
			</main>
		</>
	);
}

export default App;
