import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { LanguageSelection } from "@/components/LanguageSelection";
import { Header } from "@/components/Header";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import gatoPretoAcrobatics from "@/assets/gatoPretoAcrobatics.jpg";
import historyCapoeira from "@/assets/historyCapoeira.png";

import "aos/dist/aos.css";

export function Capoeira() {
	const { t } = useTranslation();

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
	}, []);
	return (
		<>
			<div className="min-w-80 bg-green-950 border-b-4 border-yellow-400 sticky top-0 z-50">
				<LanguageSelection />

				<Header />
			</div>

			<ScrollIndicator
				img={historyCapoeira}
				targetSection="#history"
                arrowColor="#14532d"
			/>
			<main>
				<section className="px-6 space-y-6 mb-8 pt-4 bg-white">
					<article
						id="history"
						className="scroll-mt-[155px] sm:scroll-mt-[170px] md:scroll-mt-[180px]">
						<h2
							className="font-roboto-flex text-green-900 font-black italic text-2xl mb-2"
							data-aos="fade-right">
							{t("História")}
						</h2>
						<p data-aos="zoom-in">
							{t(
								"A Capoeira é uma manifestação cultural afro-brasileira que combina elementos de arte marcial, dança, música e acrobacias. Sua origem está profundamente ligada ao contexto histórico do Brasil colonial, particularmente à experiência de africanos escravizados no país. A Capoeira nasceu no século XVII, quando africanos trazidos para o Brasil como escravizados pelas potências coloniais, principalmente de regiões da África como Angola e Congo, desenvolveram essa prática como forma de resistência. Ao chegarem ao Brasil, os africanos foram forçados a trabalhar em plantações em condições desumanas. Para lidar com essa opressão e preservar suas tradições culturais, eles criaram a Capoeira."
							)}
						</p>
					</article>

					<article>
						<h2
							className="font-roboto-flex text-green-900 font-black italic text-2xl mb-2"
							data-aos="fade-right">
							{t("O disfarce da dança")}
						</h2>
						<p data-aos="zoom-in">
							{t(
								"A Capoeira foi desenvolvida como uma forma de luta e resistência, mas sua prática era frequentemente mascarada como uma dança para evitar a repressão dos senhores de escravos. Os movimentos ágeis, rítmicos e acrobáticos criaram uma aparência de dança, enquanto a sua verdadeira função como uma ferramenta de autodefesa e treinamento para a liberdade estava oculta."
							)}
						</p>
					</article>

					<article>
						<h2
							className="font-roboto-flex text-green-900 font-black italic text-2xl mb-2"
							data-aos="fade-right">
							{t("Quilombo e resistência")}
						</h2>
						<p data-aos="zoom-in">
							{t(
								"Os quilombos, comunidades formadas por africanos fugitivos da escravidão, foram fundamentais para a preservação e o desenvolvimento da Capoeira. O mais famoso deles foi o Quilombo dos Palmares, no atual estado de Alagoas, liderado por figuras como Zumbi dos Palmares. Esses quilombos eram locais onde os escravizados fugidos se organizavam para resistir e onde a Capoeira prosperou como uma arte de guerra e sobrevivência."
							)}
						</p>
					</article>

					<article>
						<h2
							className="font-roboto-flex text-green-900 font-black italic text-2xl mb-2"
							data-aos="fade-right">
							{t("Proibição e marginalização")}
						</h2>
						<p data-aos="zoom-in">
							{t(
								"Após a abolição da escravatura em 1888, a Capoeira continuou sendo perseguida, pois era vista como uma prática de indivíduos marginalizados e considerada perigosa pelas elites. A prática foi criminalizada e associada ao crime e à vadiagem, especialmente nas cidades do Rio de Janeiro e Salvador. No entanto, mesmo sob perseguição, a Capoeira resistiu, adaptando-se ao novo contexto urbano e sendo praticada de forma clandestina."
							)}
						</p>
					</article>

					<article>
						<h2
							className="font-roboto-flex text-green-900 font-black italic text-2xl mb-2"
							data-aos="fade-right">
							{t("Reconhecimento e evolução")}
						</h2>
						<p data-aos="zoom-in">
							{t(
								"Foi no século XX que a Capoeira começou a ser legitimada e transformada. Dois mestres em particular tiveram um papel crucial nessa transição:"
							)}
						</p>
						<ol className="list-disc pl-5">
							<li data-aos="zoom-in">
								<span className="text-green-900 font-semibold">
									{t(
										"Mestre Pastinha (Vicente Ferreira Pastinha):"
									)}
								</span>{" "}
								{t(
									"Defensor da Capoeira Angola, Mestre Pastinha manteve viva a tradição mais antiga e ritualística da Capoeira, preservando seu caráter cultural."
								)}
							</li>
							<li data-aos="zoom-in">
								<span className="text-green-900 font-semibold">
									{t(
										"Mestre Bimba (Manoel dos Reis Machado):"
									)}
								</span>{" "}
								{t(
									"Criador da Capoeira Regional na década de 1930, Mestre Bimba introduziu elementos mais técnicos e sistematizados na prática, promovendo sua aceitação como uma arte marcial legítima e como um esporte."
								)}
							</li>
						</ol>
					</article>

					<article>
						<h2
							className="font-roboto-flex text-green-900 font-black italic text-2xl mb-2"
							data-aos="fade-right">
							{t("A roda")}
						</h2>
						<p data-aos="zoom-in">
							{t(
								"Ao contrário de outros esportes de combate, cujo foco está no confronto ou na competição, a capoeira tem sua essência na roda. A roda é uma cerimônia em que cada participante tem um papel definido. Composta por cantadores, músicos e instrumentos, como os berimbaus, o círculo delimita o espaço onde dois capoeiristas jogam. O som dos berimbaus, acompanhado por outros instrumentos como atabaque, pandeiro e agogô, dita o ritmo do jogo, ao qual os capoeiristas sincronizam seus movimentos. A qualquer momento, outro capoeirista pode entrar na roda, substituindo um dos jogadores e mantendo o fluxo contínuo. O objetivo não é a vitória de um sobre o outro, mas o prazer da troca de energia e da expressão coletiva, guiada pela música e pelo toque dos berimbaus."
							)}
						</p>
					</article>

					<article>
						<h2
							className="font-roboto-flex text-green-900 font-black italic text-2xl mb-2"
							data-aos="fade-right">
							{t("O Batizado")}
						</h2>
						<p data-aos="zoom-in">
							{t(
								"O batizado é um dos momentos mais importantes na vida do capoeirista. Durante esse evento, o jovem capoeirista recebe sua primeira corda, simbolizando seu progresso na arte, e também ganha um apelido, pelo qual será conhecido entre seus companheiros de roda. Essa cerimônia marca a entrada oficial do praticante na comunidade, celebrando seu aprendizado e compromisso com a Capoeira. Esse evento é um momento de celebração, crescimento e reconhecimento dentro da comunidade, acompanhado por música, cânticos e a energia coletiva da roda."
							)}
						</p>
					</article>

					<article>
						<h2
							className="font-roboto-flex text-green-900 font-black italic text-2xl mb-2"
							data-aos="fade-right">
							{t("Capoeira nos dias de hoje")}
						</h2>
						<p
							className="mb-1"
							data-aos="zoom-in">
							{t(
								"Com o tempo, a Capoeira passou de um símbolo de resistência a um importante símbolo da cultura brasileira, sendo praticada em todo o mundo. Em 2008, o governo brasileiro reconheceu a Capoeira como"
							)}
                            {" "}
							<span className="text-green-900 font-bold italic">
								{t("Patrimônio Cultural Imaterial do Brasil")}
							</span>
							{t(", e em 2014, a UNESCO a declarou como")}
                            {" "}
							<span className="text-green-900 font-bold italic">
								{t(
									"Patrimônio Cultural Imaterial da Humanidade"
								)}
							</span>
							.
						</p>
						<p data-aos="zoom-in">
							{t(
								"Hoje, a Capoeira é mais do que uma luta ou dança. Ela representa resistência cultural, celebração da herança africana no Brasil e uma conexão profunda entre corpo, música."
							)}
						</p>
					</article>
				</section>

				<section className="px-6 lg:flex">
					<img
						src={gatoPretoAcrobatics}
						alt=""
						className="w-full sm:w-[600px] rounded-lg mb-6 mx-auto"
						data-aos="fade-right"
					/>
					<div className="px-15 sm:flex sm:flex-col sm:justify-center">
						<h2
							className="font-roboto-flex font-black italic text-2xl sm:text-4xl text-center mb-4 text-green-900"
							data-aos="fade-down">
							{t(
								"Quer sentir a energia contagiante da Capoeira?"
							)}
						</h2>
						<p
							className="sm:px-16 mb-4"
							data-aos="fade-up">
							{t(
								"Não perca tempo! A Capoeira conecta você a uma comunidade rica em cultura e tradição, faça sua inscrição agora ou entre em contato pelas redes sociais, como WhatsApp, e descubra como essa arte pode transformar sua vida! Clique no link abaixo e comece sua jornada!"
							)}
						</p>
						<div
							className="flex justify-center mb-10"
							data-aos="fade-up">
							<Button>{t("Comece sua jornada")}</Button>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</>
	);
}
