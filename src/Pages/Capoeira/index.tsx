import { NavLink } from "react-router-dom";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { Footer } from "@/components/Footer";
import logoEP from "@/assets/logoEnergia.png";
import rodaDeCapoeira from "@/assets/roda-de-capoeira.jpeg";

export function Capoeira() {
	return (
		<>
			<div className="min-w-80 bg-green-900 border-b-4 border-yellow-400 sticky top-0 z-50">
				<header className="relative h-28 md:h-28 bg-green-900 flex items-center justify-around sm:justify-normal sm:px-4  lg:max-w-[1024px] lg:mx-auto  ">
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

			{/* Scroll Down */}
			<div className="relative h-screen">
				<img
					src={rodaDeCapoeira}
					alt="Imagem de fundo"
					className="object-cover w-full h-screen"
				/>

				<div className="absolute inset-x-0 bottom-48 sm:bottom-28 flex justify-center">
					<div className="flex flex-col justify-center items-center text-white">
						<h2>Deslize para baixo</h2>

						<a href="#proxima-secao">
							<svg
								className="w-10 h-10 animate-bounce text-white"
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
					<article>
						<h2 className="text-green-900 font-extrabold mb-2">História</h2>

						<p>
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
						<h2 className="text-green-900 font-extrabold mb-2">
							O disfarce da dança
						</h2>

						<p>
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
						<h2 className="text-green-900 font-extrabold mb-2">
							Quilombo e resistência
						</h2>

						<p>
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
						<h2 className="text-green-900 font-extrabold mb-2">
							Proibição e marginalização
						</h2>

						<p>
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
						<h2 className="text-green-900 font-extrabold mb-2">
							Reconhecimento e evolução
						</h2>

						<p>
							Foi no século XX que a Capoeira começou a ser
							legitimada e transformada. Dois mestres em
							particular tiveram um papel crucial nessa transição:
						</p>

						<ol className="list-disc pl-5">
							<li>
								<span className="text-green-900 font-semibold">
									Mestre Pastinha (Vicente Ferreira Pastinha):
								</span>{" "}
								Defensor da Capoeira Angola, Mestre Pastinha
								manteve viva a tradição mais antiga e
								ritualística da Capoeira, preservando seu
								caráter cultural.
							</li>
							<li>
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
						<h2 className="text-green-900 font-extrabold mb-2">A roda</h2>

						<p>
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
						<h2 className="text-green-900 font-extrabold mb-2">O Batizado</h2>

						<p>
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
						<h2 className="text-green-900 font-extrabold mb-2">
							Capoeira nos dias de hoje
						</h2>
						<p className="mb-1">
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

						<p>
							Hoje, a Capoeira é mais do que uma luta ou dança.
							Ela representa resistência cultural, celebração da
							herança africana no Brasil e uma conexão profunda
							entre corpo, música.
						</p>
					</article>
				</section>
			</main>
			<Footer />
		</>
	);
}
