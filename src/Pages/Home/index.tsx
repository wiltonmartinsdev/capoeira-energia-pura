import AOS from "aos";
import { useEffect } from "react";
import Marquee from "react-marquee-slider";
import { Link, NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { Carousel } from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
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

import "aos/dist/aos.css";

export function Home() {
	const flags = [
		{ src: macapaFlag, alt: "Bandeira de Macapá", caption: "Macapá" },
		{ src: oiapoqueFlag, alt: "Bandeira do Oiapoque", caption: "Oiapoque" },
		{ src: brasilFlag, alt: "Bandeira do Brasil", caption: "Brasil" },
		{
			src: frenchGuianaFlag,
			alt: "Bandeira da Guiana Francesa",
			caption: "Guiana Francesa",
		},
		{
			src: martinicaFlag,
			alt: "Bandeira da Martinica",
			caption: "Martinica",
		},
		{ src: franceFlag, alt: "Bandeira da França", caption: "França" },
		{ src: italiaFlag, alt: "Bandeira da Itália", caption: "Itália" },
		{ src: dubaiFlag, alt: "Bandeira de Dubai", caption: "Dubai" },
	];

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

			<main className="min-w-80 xl:max-w-[1920px] mx-auto">
				<Carousel />

				<div className="text-left px-4 sm:px-20 lg:max-w-[1518px] lg:mx-auto">
					<p className="h-[110px] sm:h-auto sm:mb-4 text-center font-bold">
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
						e a dança. A Capoeira é mais que um esporte ou arte
						marcial é um símbolo de nossa ancestralidade, uma
						expressão viva de resistência e um laço que une
						comunidades por gerações.{" "}
						<span className="font-bold italic">
							A Associação Energia Pura Internacional é mais do
							que um grupo, somos uma família unida pela paixão
							pela arte e pela tradição da Capoeira.
						</span>
					</p>

					<div className="text-center mb-20">
						<Link to="/about">
							<Button> Saiba mais...</Button>
						</Link>
					</div>
				</div>

				<h2
					className="text-green-900 text-3xl text-center uppercase font-bold px-4 mb-8"
					data-aos="fade-up">
					Um pouco das nossas atividades...
				</h2>

				<section className="max-w-[1430px] mx-auto px-8 sm:px-20 xl:flex xl:justify-around">
					<article
						className="flex flex-col mb-6"
						data-aos="fade-right">
						<h2 className="text-green-900 text-xl uppercase font-bold mb-3">
							Capoeira
						</h2>

						<div className="card flex ">
							<img
								src={capoeiraBgCard}
								alt=""
								className="w-full rounded-2xl"
							/>

							<Link to="/capoeira">
								<Button className="card-button">
									Saiba mais...
								</Button>
							</Link>
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
								<Link to="/capoeira">
									<Button>Saiba mais...</Button>
								</Link>
							</div>
						</div>
					</article>

					<article
						className="flex flex-col mb-6"
						data-aos="zoom-in">
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

					<article
						className="flex flex-col"
						data-aos="zoom-in-left">
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

				<div
					className="min-w-80 bg-green-950 xl:max-w-[1920px]"
					data-aos="zoom-in">
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
								{flags.map((flag, index) => (
									<figure
										key={index}
										className="ml-20 w-[200px]">
										<img
											src={flag.src}
											alt={flag.alt}
											className="rounded-lg"
										/>
										<figcaption className="uppercase text-center text-white font-semibold">
											{flag.caption}
										</figcaption>
									</figure>
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
								{flags.map((flag, index) => (
									<figure
										key={index}
										className="ml-20 w-[200px]">
										<img
											src={flag.src}
											alt={flag.alt}
											className="rounded-lg"
										/>
										<figcaption className="uppercase text-center text-white font-semibold">
											{flag.caption}
										</figcaption>
									</figure>
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
								{flags
									.slice() // Faz uma cópia do array para não modificar o original
									.reverse()
									.map((flag, index) => (
										<figure
											key={index}
											className="ml-20 w-[200px]">
											<img
												src={flag.src}
												alt={flag.alt}
												className="rounded-lg"
											/>
											<figcaption className="uppercase text-center text-white font-semibold">
												{flag.caption}
											</figcaption>
										</figure>
									))}
							</Marquee>
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</>
	);
}
