import AOS from "aos";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import gatoPretoAcrobatics from "@/assets/gatoPretoAcrobatics.jpg";
import historyCapoeira from "@/assets/historyCapoeira.png";
import logoEP from "@/assets/logoEnergia.png";

import "aos/dist/aos.css";

export function Capoeira() {
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
					src={historyCapoeira}
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

						<a href="#history">
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
				<section className="px-6 space-y-6 mb-8 pt-4 bg-white">
					<article
						id="history"
						className="scroll-mt-32">
						<h2
							className="text-green-900 font-extrabold text-2xl mb-2"
							data-aos="fade-right">
							História
						</h2>

						<p data-aos="zoom-in">
							A Capoeira é uma manifestação cultural
							afro-brasileira que combina elementos de arte
							marcial, dança, música e acrobacias. Sua origem está
							profundamente ligada ao contexto histórico do Brasil
							colonial, particularmente à experiência de africanos
							escravizados no país. A Capoeira nasceu no século
							XVII, quando africanos trazidos para o Brasil como
							escravizados pelas potências coloniais,
							principalmente de regiões da África como Angola e
							Congo, desenvolveram essa prática como forma de
							resistência. Ao chegarem ao Brasil, os africanos
							foram forçados a trabalhar em plantações em
							condições desumanas. Para lidar com essa opressão e
							preservar suas tradições culturais, eles criaram a
							Capoeira.
						</p>
					</article>

					<article>
						<h2
							className="text-green-900 font-extrabold text-2xl mb-2"
							data-aos="fade-right">
							O disfarce da dança
						</h2>

						<p data-aos="zoom-in">
							A Capoeira foi desenvolvida como uma forma de luta e
							resistência, mas sua prática era frequentemente
							mascarada como uma dança para evitar a repressão dos
							senhores de escravos. Os movimentos ágeis, rítmicos
							e acrobáticos criaram uma aparência de dança,
							enquanto a sua verdadeira função como uma ferramenta
							de autodefesa e treinamento para a liberdade estava
							oculta.
						</p>
					</article>

					<article>
						<h2
							className="text-green-900 font-extrabold text-2xl mb-2"
							data-aos="fade-right">
							Quilombo e resistência
						</h2>

						<p data-aos="zoom-in">
							Os quilombos, comunidades formadas por africanos
							fugitivos da escravidão, foram fundamentais para a
							preservação e o desenvolvimento da Capoeira. O mais
							famoso deles foi o Quilombo dos Palmares, no atual
							estado de Alagoas, liderado por figuras como Zumbi
							dos Palmares. Esses quilombos eram locais onde os
							escravizados fugidos se organizavam para resistir e
							onde a Capoeira prosperou como uma arte de guerra e
							sobrevivência.
						</p>
					</article>

					<article>
						<h2
							className="text-green-900 font-extrabold text-2xl mb-2"
							data-aos="fade-right">
							Proibição e marginalização
						</h2>

						<p data-aos="zoom-in">
							Após a abolição da escravatura em 1888, a Capoeira
							continuou sendo perseguida, pois era vista como uma
							prática de indivíduos marginalizados e considerada
							perigosa pelas elites. A prática foi criminalizada e
							associada ao crime e à vadiagem, especialmente nas
							cidades do Rio de Janeiro e Salvador. No entanto,
							mesmo sob perseguição, a Capoeira resistiu,
							adaptando-se ao novo contexto urbano e sendo
							praticada de forma clandestina.
						</p>
					</article>

					<article>
						<h2
							className="text-green-900 font-extrabold text-2xl mb-2"
							data-aos="fade-right">
							Reconhecimento e evolução
						</h2>

						<p data-aos="zoom-in">
							Foi no século XX que a Capoeira começou a ser
							legitimada e transformada. Dois mestres em
							particular tiveram um papel crucial nessa transição:
						</p>

						<ol className="list-disc pl-5">
							<li data-aos="zoom-in">
								<span className="text-green-900 font-semibold">
									Mestre Pastinha (Vicente Ferreira Pastinha):
								</span>{" "}
								Defensor da Capoeira Angola, Mestre Pastinha
								manteve viva a tradição mais antiga e
								ritualística da Capoeira, preservando seu
								caráter cultural.
							</li>
							<li data-aos="zoom-in">
								<span className="text-green-900 font-semibold">
									Mestre Bimba (Manoel dos Reis Machado):{" "}
								</span>
								Criador da Capoeira Regional na década de 1930,
								Mestre Bimba introduziu elementos mais técnicos
								e sistematizados na prática, promovendo sua
								aceitação como uma arte marcial legítima e como
								um esporte.
							</li>
						</ol>
					</article>

					<article>
						<h2
							className="text-green-900 font-extrabold text-2xl mb-2"
							data-aos="fade-right">
							A roda
						</h2>

						<p data-aos="zoom-in">
							Ao contrário de outros esportes de combate, cujo
							foco está no confronto ou na competição, a capoeira
							tem sua essência na roda. A roda é uma cerimônia em
							que cada participante tem um papel definido.
							Composta por cantadores, músicos e instrumentos,
							como os berimbaus, o círculo delimita o espaço onde
							dois capoeiristas jogam. O som dos berimbaus,
							acompanhado por outros instrumentos como atabaque,
							pandeiro e agogô, dita o ritmo do jogo, ao qual os
							capoeiristas sincronizam seus movimentos. A qualquer
							momento, outro capoeirista pode entrar na roda,
							substituindo um dos jogadores e mantendo o fluxo
							contínuo. O objetivo não é a vitória de um sobre o
							outro, mas o prazer da troca de energia e da
							expressão coletiva, guiada pela música e pelo toque
							dos berimbaus.
						</p>
					</article>

					<article>
						<h2
							className="text-green-900 font-extrabold text-2xl mb-2"
							data-aos="fade-right">
							O Batizado
						</h2>

						<p data-aos="zoom-in">
							O batizado é um dos momentos mais importantes na
							vida do capoeirista. Durante esse evento, o jovem
							capoeirista recebe sua primeira corda, simbolizando
							seu progresso na arte, e também ganha um apelido,
							pelo qual será conhecido entre seus companheiros de
							roda. Essa cerimônia marca a entrada oficial do
							praticante na comunidade, celebrando seu aprendizado
							e compromisso com a Capoeira. Esse evento é um
							momento de celebração, crescimento e reconhecimento
							dentro da comunidade, acompanhado por música,
							cânticos e a energia coletiva da roda.
						</p>
					</article>

					<article>
						<h2
							className="text-green-900 font-extrabold text-2xl mb-2"
							data-aos="fade-right">
							Capoeira nos dias de hoje
						</h2>
						<p
							className="mb-1"
							data-aos="zoom-in">
							Com o tempo, a Capoeira passou de um símbolo de
							resistência a um importante símbolo da cultura
							brasileira, sendo praticada em todo o mundo. Em
							2008, o governo brasileiro reconheceu a Capoeira
							como{" "}
							<span className="text-green-900 font-bold italic">
								Patrimônio Cultural Imaterial do Brasil
							</span>
							, e em 2014, a UNESCO a declarou como{" "}
							<span className="text-green-900 font-bold italic">
								Patrimônio Cultural Imaterial da Humanidade
							</span>
							.
						</p>

						<p data-aos="zoom-in">
							Hoje, a Capoeira é mais do que uma luta ou dança.
							Ela representa resistência cultural, celebração da
							herança africana no Brasil e uma conexão profunda
							entre corpo, música.
						</p>
					</article>
				</section>

				<section className="px-6 sm:flex">
					<img
						src={gatoPretoAcrobatics}
						alt=""
						className="w-full sm:w-[600px] rounded-lg mb-6"
						data-aos="fade-right"
					/>

					<div className="px-15 sm:flex sm:flex-col sm:justify-center">
						<h2
							className="font-extrabold text-2xl sm:text-4xl text-center mb-4 text-green-950"
							data-aos="fade-down">
							Quer sentir a energia contagiante da Capoeira?
						</h2>
						<p
							className="sm:px-16 mb-4"
							data-aos="fade-up">
							Não perca tempo! A Capoeira conecta você a uma
							comunidade rica em cultura e tradição, faça sua
							inscrição agora ou entre em contato pelas redes
							sociais, como WhatsApp, e descubra como essa arte
							pode transformar sua vida! Clique no link abaixo e
							comece sua jornada!
						</p>
						<div
							className="flex justify-center mb-10"
							data-aos="fade-up">
							<Button>Comece sua jornada 🚀</Button>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
}
