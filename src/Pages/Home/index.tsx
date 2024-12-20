import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Marquee from "react-marquee-slider";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

import { Carousel } from "@/components/Carousel";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import batucadaBgCard from "@/assets/batucadaBgCard.png";
import brasilFlag from "@/assets/brasilFlag.png";
import capoeiraBgCard from "@/assets/capoeiraBgCard.png";
import dubaiFlag from "@/assets/dubaiFlag.png";
import franceFlag from "@/assets/franceFlag.png";
import frenchGuianaFlag from "@/assets/frenchGuianaFlag.png";
import frenchGuianaFlagBg from "@/assets/frenchGuianaFlagBg.png";
import italiaFlag from "@/assets/italiaFlag.png";
import macapaFlag from "@/assets/macapaFlag.png";
import martinicaFlag from "@/assets/martinicaFlag.png";
import oiapoqueFlag from "@/assets/oiapoqueFlag.png";
import sambaxeBgCard from "@/assets/sambaxeBgCard.png";

import "aos/dist/aos.css";

export function Home() {
	const { t } = useTranslation();

	const flags = [
		{ src: macapaFlag, alt: t("Bandeira de Macapá"), caption: t("Macapá") },
		{
			src: oiapoqueFlag,
			alt: t("Bandeira do Oiapoque"),
			caption: t("Oiapoque"),
		},
		{ src: brasilFlag, alt: t("Bandeira do Brasil"), caption: t("Brasil") },
		{
			src: frenchGuianaFlag,
			alt: t("Bandeira da Guiana Francesa"),
			caption: t("Guiana Francesa"),
		},
		{
			src: martinicaFlag,
			alt: t("Bandeira da Martinica"),
			caption: t("Martinica"),
		},
		{ src: franceFlag, alt: t("Bandeira da França"), caption: t("França") },
		{ src: italiaFlag, alt: t("Bandeira da Itália"), caption: t("Itália") },
		{ src: dubaiFlag, alt: t("Bandeira de Dubai"), caption: t("Dubai") },
	];

	useEffect(() => {
		const handleScroll = () => {
			AOS.init({
				duration: 1500,
			});
			AOS.refresh(); // Atualiza as animações com base no scroll

			// Remove o event listener de scroll após a primeira execução para que o AOS não seja reinicializado em cada scroll
			window.removeEventListener("scroll", handleScroll);
		};

		window.addEventListener("scroll", handleScroll);

		// Cleanup para garantir que o listener seja removido se o componente for desmontado antes do scroll
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [t]);

	return (
		<>
			<Header />

			<main className="min-w-80 xl:max-w-[1920px] mx-auto">
				<Carousel />

				<div className="text-left px-4 sm:px-20 lg:max-w-[1518px] lg:mx-auto mt-6 sm:mt-0">
					<p className="h-[130px] sm:h-auto sm:mb-4 text-center font-roboto-flex font-black italic">
						{t("Bem-vindo ao site da")}
						<br />
						<span className="font-roboto-flex text-3xl font-black italic text-green-900">
							<Typewriter
								options={{
									strings: [
										t(
											"Associação Energia Pura Internacional"
										),
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
						{t(
							"Nosso grupo tem como missão divulgar, preservar e promover o rico universo da Capoeira, destacando não apenas a prática do jogo em si, mas também suas expressões culturais associadas, como o canto, a música e a dança. A Capoeira é mais que um esporte ou arte marcial é um símbolo de nossa ancestralidade, uma expressão viva de resistência e um laço que une comunidades por gerações."
						)}{" "}
						<span className="font-bold italic">
							{t(
								"A Associação Energia Pura Internacional é mais do que um grupo, somos uma família unida pela paixão pela arte e pela tradição da Capoeira."
							)}
						</span>
					</p>

					<div className="text-center mb-20">
						<Link to="/about">
							<Button> {t("Saiba mais")}</Button>
						</Link>
					</div>
				</div>

				<h2
					className="font-roboto-flex text-green-900 text-3xl text-center font-black italic px-4 mb-8"
					data-aos="fade-up">
					{t("Um pouco das nossas atividades...")}
				</h2>

				<section className="max-w-[1430px] mx-auto px-8 sm:px-20 xl:flex xl:justify-around">
					<article
						className="flex flex-col mb-6"
						data-aos="fade-right">
						<h2 className="text-green-900 text-xl uppercase font-bold mb-3">
							{t("Capoeira")}
						</h2>

						<div className="card flex ">
							<img
								src={capoeiraBgCard}
								alt=""
								className="w-full rounded-2xl"
							/>

							<Link to="/capoeira">
								<Button className="card-button">
									{t("Saiba mais")}
								</Button>
							</Link>
						</div>

						<div className="w-full xl:w-96 pl-2">
							<p className="mb-4">
								{t(
									"A capoeira é uma expressão cultural fascinante que une luta, dança, jogo, canto e ritmo. É uma prática envolvente e completa, além de ser uma excelente porta de entrada para a rica cultura brasileira, que convidamos você a conhecer."
								)}
							</p>

							<p className="mb-4">
								{t("Os cursos do")}{" "}
								<span className="font-bold italic">
									{t("Mestre Gato Preto")}
								</span>{" "}
								{t(
									"são voltados para todas as idades, desde crianças até adultos, tanto para iniciantes quanto para praticantes experientes."
								)}
							</p>

							<p className="mb-4 lg:mb-0 xl:mb-4">
								{t("Experimente! A primeira aula é gratuita!")}
							</p>
							<div className="flex justify-center">
								<Link to="/capoeira">
									<Button>{t("Saiba mais")}</Button>
								</Link>
							</div>
						</div>
					</article>

					<article
						className="flex flex-col mb-6"
						data-aos="zoom-in">
						<h2 className="text-green-900 text-xl uppercase font-bold mb-3">
							{t("Batucada")}
						</h2>

						<div className="card flex ">
							<img
								src={batucadaBgCard}
								alt=""
								className="w-full rounded-2xl"
							/>

							<Button className="card-button">
								{t("Saiba mais")}
							</Button>
						</div>

						<div className="w-full xl:w-96 px-4">
							<p className="mb-4">
								{t(
									"Originária do Rio de Janeiro, a batucada é uma tradição pulsante da percussão brasileira, profundamente enraizada no espírito do carnaval e na energia contagiante do samba."
								)}
							</p>

							<p className="mb-4">
								{t("Sob a direção do")}{" "}
								<span className="font-bold italic">
									{t("Professor Marco")}
								</span>{" "}
								{t(
									"o grupo acolhe participantes de todos os níveis, do iniciante ao mais experiente."
								)}
							</p>

							<div className="flex justify-center">
								<Button>{t("Saiba mais")}</Button>
							</div>
						</div>
					</article>

					<article
						className="flex flex-col"
						data-aos="zoom-in-left">
						<h2 className="text-green-900 text-xl uppercase font-bold mb-3">
							{t("Sambaxé")}
						</h2>
						<div className="card flex ">
							<img
								src={sambaxeBgCard}
								alt=""
								className="w-full rounded-2xl"
							/>

							<Button className="card-button">
								{t("Saiba mais")}
							</Button>
						</div>

						<div className="w-full xl:w-96 px-4">
							<p className="mb-4">
								{t(
									"A Associação Energia Pura oferece uma vibrante seção de dança efêmera liderada pela talentosa"
								)}{" "}
								<span className="font-bold italic">
									{t("Amandine Zabumba.")}
								</span>
							</p>

							<p className="mb-4">
								{t(
									"O ponto alto dessa experiência é a participação nos desfiles do Carnaval da Guiana Francesa, ao lado do grupo de percussão BATUQUE AE. Juntos, eles criam um espetáculo inesquecível, cheio de ritmo, cores e alegria."
								)}
							</p>

							<div className="flex justify-center mb-10">
								<Button>{t("Saiba mais")}</Button>
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
							<p className="font-roboto-flex text-black font-black text-center uppercase text-3xl sm:text-4xl lg:text-6xl xl:text-7xl">
								{t("Energia Pura Internacional")}
							</p>
						</div>

						<div className="px-8 pt-4">
							<p className=" text-white text-center font-semibold sm:hidden ">
								{t(
									"Estamos presentes no Brasil, mas também atuamos em:"
								)}
							</p>

							<p className="hidden sm:block text-white sm:font-semibold text-center ">
								{t(
									"Estamos presentes no Brasil, no estado do Amapá, com atuação em Macapá, a capital, e no município de Oiapoque, na fronteira com a Guiana Francesa. Além disso, também estamos em:"
								)}
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
										<figcaption className="font-roboto-flex text-center text-white font-black italic">
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
										<figcaption className="font-roboto-flex text-center text-white font-black italic">
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
											<figcaption className="font-roboto-flex text-center text-white font-black italic">
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
