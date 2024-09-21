import Marquee from "react-marquee-slider";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { Carousel } from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import batucadaBgCard from "@/assets/batucadaBgCard.png";
import brasilFlag from "@/assets/brasilFlag.png";
import capoeiraBgCard from "@/assets/capoeiraBgCard.png";
import dubaiFlag from "@/assets/dubaiFlag.png";
import franceFlag from "@/assets/franceFlag.png";
import frenchGuianaFlag from "@/assets/frenchGuianaFlag.png";
import frenchGuianaFlagBg from "@/assets/frenchGuianaFlagBg.png";
import italiaFlag from "@/assets/italiaFlag.png";
import logoEP from "@/assets/logoEnergia.png";
import macapaFlag from "@/assets/macapaFlag.png";
import martinicaFlag from "@/assets/martinicaFlag.png";
import oiapoqueFlag from "@/assets/oiapoqueFlag.png";
import sambaxeBgCard from "@/assets/sambaxeBgCard.png";

export function Home() {
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

						<p className="text-center text-lg text-white">
							Internacional
						</p>
					</div>

					<div className="hidden sm:flex sm:w-full sm:justify-center">
						<nav className="">
							<ul className="flex items-center gap-8 text-white">
								<li>
									<NavLink
										to="/"
										className="hover:text-yellow-400">
										Notícias
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/association"
										className="hover:text-yellow-400">
										Associação
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/capoeira"
										className="hover:text-yellow-400">
										Capoeira
									</NavLink>
								</li>

								<li>
									<NavLink
										to="/projects"
										className="hover:text-yellow-400">
										Projetos
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/medias"
										className="hover:text-yellow-400">
										Mídias
									</NavLink>
								</li>

								<li>
									<NavLink
										to="/contact"
										className="hover:text-yellow-400">
										Contato
									</NavLink>
								</li>
							</ul>
						</nav>
					</div>

					<HamburgerMenu />
				</header>
			</div>

			<main className="min-w-80 xl:max-w-[1920px] mx-auto">
				<Carousel />

				<div className="text-left px-4 sm:px-20 lg:max-w-[1518px] lg:mx-auto ">
					<p className="mb-4 text-center font-bold">
						Bem-vindo ao site da
						<br />
						<span className="text-3xl font-bold text-green-900 italic">
							<Typewriter
								options={{
									strings: [
										"Associação Energia Pura Internacional",
									],
									autoStart: true,
									loop: true,
									delay: 60,
									//   startDelay: 1500, // Tempo para iniciar após o texto anterior
								}}
							/>
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

							<div className="flex justify-center mb-10">
								<Button>Saiba mais...</Button>
							</div>
						</div>
					</article>
				</section>

				<div className="min-w-80 bg-green-900 xl:max-w-[1920px] rounded-b-xl">
					<section className=" h-[450px] sm:h-[720px] lg:h-[830px] xl:h-[870px]">
						<div
							className="bg-no-repeat bg-[length:100%_100%] px-8 flex flex-col justify-center h-40 sm:h-52 lg:h-80 xl:h-[380px]"
							style={{
								backgroundImage: `url(${frenchGuianaFlagBg})`,
							}}>
							<p className="text-black font-bold text-center uppercase text-3xl sm:text-4xl lg:text-6xl xl:text-7xl">
								Energia Pura Internacional
							</p>
						</div>

						<div className="px-8 pt-4">
							<p className=" text-white text-center font-semibold sm:hidden ">
								Estamos presentes no Brasil, mas também atuamos
								em:
							</p>

							<p className="hidden sm:block text-white sm:font-semibold text-center ">
								Estamos presentes no Brasil, no estado do Amapá,
								com atuação em Macapá, a capital, e no município
								de Oiapoque, na fronteira com a Guiana Francesa.
								Além disso, também estamos em:
							</p>
						</div>

						<div className="mt-10 sm:hidden">
							<Marquee
								velocity={15}
								resetAfterTries={200}
								direction="rtl"
								scatterRandomly={false}
								onInit={() =>
									console.log("Marquee initialized")
								}
								onFinish={() =>
									console.log("Marquee finished")
								}>
								{Array.from({ length: 1 }).map((_, id) => (
									<div className="flex gap-20">
										<figure className="ml-20 w-[200px]">
											<img
												key={id}
												src={macapaFlag}
												alt="Bandeira de Macapá"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-center text-white">
												Macapá
											</figcaption>
										</figure>

										<figure className="w-[200px]">
											<img
												key={id}
												src={oiapoqueFlag}
												alt="Bandeira do Oiapoque"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-center text-white font-semibold">
												Oiapoque
											</figcaption>
										</figure>

										<figure className="w-[200px]">
											<img
												key={id}
												src={brasilFlag}
												alt="Bandeira do Brasil"
												className="rounded-lg"
											/>

											<figcaption className="uppercase  text-center text-white font-semibold">
												Brasil
											</figcaption>
										</figure>

										<figure className="w-[200px]">
											<img
												key={id}
												src={frenchGuianaFlag}
												alt="Bandeira da Guiana Francesa"
												className="rounded-lg"
											/>

											<figcaption className="uppercase  text-center text-white font-semibold">
												Guiana Francesa
											</figcaption>
										</figure>

										<figure className="w-[200px]">
											<img
												key={id}
												src={martinicaFlag}
												alt="Bandeira da Martinica"
												className="rounded-lg"
											/>

											<figcaption className="uppercase  text-center text-white font-semibold">
												Martinica
											</figcaption>
										</figure>

										<figure className="w-[200px]">
											<img
												key={id}
												src={franceFlag}
												alt="Bandeira da França"
												className="rounded-lg"
											/>

											<figcaption className="uppercase  text-center text-white font-semibold">
												França
											</figcaption>
										</figure>

										<figure className="w-[200px]">
											<img
												key={id}
												src={italiaFlag}
												alt="Bandeira da Itália"
												className="rounded-lg"
											/>

											<figcaption className="uppercase  text-center text-white font-semibold">
												Itália
											</figcaption>
										</figure>

										<figure className="w-[200px]">
											<img
												key={id}
												src={dubaiFlag}
												alt="Bandeira de Dubai"
												className="rounded-lg"
											/>

											<figcaption className="uppercase  text-center text-white font-semibold">
												Dubai
											</figcaption>
										</figure>
									</div>
								))}
							</Marquee>
						</div>

						<div className="space-y-10 hidden sm:block sm:mt-12">
							<Marquee
								velocity={50}
								resetAfterTries={200}
								direction="rtl"
								scatterRandomly={false}
								onInit={() =>
									console.log("Marquee initialized")
								}
								onFinish={() =>
									console.log("Marquee finished")
								}>
								{Array.from({ length: 1 }).map((_, id) => (
									<div className="flex gap-20">
										<figure className="ml-20 w-[200px] text-center">
											<img
												key={id}
												src={macapaFlag}
												alt="Bandeira de Macapá"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Macapá
											</figcaption>
										</figure>

										<figure className=" w-[200px] text-center">
											<img
												key={id}
												src={oiapoqueFlag}
												alt="Bandeira do Oiapoque"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Oiapoque
											</figcaption>
										</figure>

										<figure className=" w-[200px] text-center">
											<img
												key={id}
												src={brasilFlag}
												alt="Bandeira do Brasil"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Brasil
											</figcaption>
										</figure>

										<figure className="w-[200px] text-center">
											<img
												key={id}
												src={frenchGuianaFlag}
												alt="Bandeira da Guiana Francesa"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Guiana Francesa
											</figcaption>
										</figure>

										<figure className="w-[200px] text-center">
											<img
												key={id}
												src={martinicaFlag}
												alt="Bandeira da Martinica"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Martinica
											</figcaption>
										</figure>

										<figure className="w-[200px] text-center">
											<img
												key={id}
												src={franceFlag}
												alt="Bandeira da França"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												França
											</figcaption>
										</figure>

										<figure className="w-[200px] text-center">
											<img
												key={id}
												src={italiaFlag}
												alt="Bandeira da Itália"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Itália
											</figcaption>
										</figure>

										<figure className="w-[200px] text-center">
											<img
												key={id}
												src={dubaiFlag}
												alt="Bandeira de Dubai"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Dubai
											</figcaption>
										</figure>
									</div>
								))}
							</Marquee>

							<Marquee
								velocity={50}
								resetAfterTries={200}
								direction="ltr"
								scatterRandomly={false}
								onInit={() =>
									console.log("Marquee initialized")
								}
								onFinish={() =>
									console.log("Marquee finished")
								}>
								{Array.from({ length: 1 }).map((_, id) => (
									<div className="flex gap-20">
										<figure className="ml-20 w-[200px] text-center">
											<img
												key={id}
												src={dubaiFlag}
												alt="Bandeira de Dubai"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Dubai
											</figcaption>
										</figure>

										<figure className="w-[200px] text-center">
											<img
												key={id}
												src={italiaFlag}
												alt="Bandeira da Itália"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Itália
											</figcaption>
										</figure>

										<figure className="w-[200px] text-center">
											<img
												key={id}
												src={franceFlag}
												alt="Bandeira da França"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												França
											</figcaption>
										</figure>

										<figure className="w-[200px] text-center">
											<img
												key={id}
												src={martinicaFlag}
												alt="Bandeira da Martinica"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Martinica
											</figcaption>
										</figure>

										<figure className="w-[200px] text-center">
											<img
												key={id}
												src={frenchGuianaFlag}
												alt="Bandeira da Guiana Francesa"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Guiana Francesa
											</figcaption>
										</figure>

										<figure className=" w-[200px] text-center">
											<img
												key={id}
												src={brasilFlag}
												alt="Bandeira do Brasil"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Brasil
											</figcaption>
										</figure>

										<figure className=" w-[200px] text-center">
											<img
												key={id}
												src={oiapoqueFlag}
												alt="Bandeira do Oiapoque"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Oiapoque
											</figcaption>
										</figure>

										<figure className="w-[200px] text-center">
											<img
												key={id}
												src={macapaFlag}
												alt="Bandeira de Macapá"
												className="rounded-lg"
											/>

											<figcaption className="uppercase text-white font-semibold">
												Macapá
											</figcaption>
										</figure>
									</div>
								))}
							</Marquee>
						</div>
					</section>
				</div>
			</main>
		</>
	);
}
