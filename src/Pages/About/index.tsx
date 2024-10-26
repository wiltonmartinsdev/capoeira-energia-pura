import AOS from "aos";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Footer } from "@/components/Footer";
import { LanguageSelection } from "@/components/LanguageSelection";
import { Header } from "@/components/Header";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import gatoPreto from "@/assets/gatoPreto.jpg";
import graduationSystem from "@/assets/graduationSystem.jpg";
import uniform from "@/assets/uniform.jpg";
import rodaDeCapoeira from "@/assets/roda-de-capoeira.jpeg";


import "aos/dist/aos.css";

export function About() {
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
	}, [t]);

	return (
		<>
			<div className="min-w-80 bg-green-950 border-b-4 border-yellow-400 sticky top-0 z-50">
				<LanguageSelection />

				<Header />
			</div>

			<ScrollIndicator img={rodaDeCapoeira} targetSection="#master" />

			<main>
				<section className="px-8">
					<h2
						id="master"
						className="my-4 text-3xl text-center font-bold text-green-900 scroll-mt-11 md:scroll-mt-14"
						data-aos="fade-down">
						{t("O Mestre Gato Preto")}
					</h2>

					<figure data-aos="fade-up">
						<img
							src={gatoPreto}
							alt={t("Foto do Mestre Gato Preto")}
							className="w-full lg:w-[750px] mx-auto rounded-lg shadow-lg mb-1"
						/>

						<figcaption className="text-xs mb-4 sm:mb-8 sm:text-center">
							{t(
								"Jeremias Belo dos Santos, mais conhecido como Gato Preto, nasceu em 17 de abril de 1980, em Petrolina, Pernambuco."
							)}
						</figcaption>
					</figure>
					<div className="space-y-4 mb-8">
						<p>
							{t(
								"Iniciei minha trajetória na capoeira aos 4 anos de idade, brincando no grupo Ginga do Corpo Negro no bairro do Cavaleiro, em Recife, treinava com amigos sob a orientação do meu tio, Instrutor Lito, que mais tarde se tornaria Mestre do grupo Aza Branca. Aos 5 anos, participei do meu primeiro batizado, um momento marcante que oficializou minha entrada no mundo da capoeira. Com a partida de Mestre Lito para São Paulo, continuei treinando em Recife com os alunos graduados do grupo e, posteriormente, em Maceió, Salvador e São Paulo em 1989. Nessa jornada, conheci diversos outros grupos de capoeira, o que me permitiu aprimorar ainda mais minhas técnicas."
							)}
						</p>

						<p>
							{t(
								"Em 1990, formamos um grupo de apresentações com outros alunos graduados do grupo Ginga do Corpo Negro e percorremos o Brasil mostrando nossa arte. Em 1992, viajei com meu irmão, Borrachinha, e o professor Estivador pelo norte do país, passando por Belém, Manaus e Macapá. Naquela época, a capoeira ainda era pouco conhecida na região, então decidimos começar a dar aulas. Em 1998, expandimos nossos horizontes e seguimos para a Guiana Francesa, depois para Martinica, Guadalupe e finalmente Paris, onde fizemos várias apresentações durante a Copa do Mundo de Futebol."
							)}
						</p>

						<p>
							{t(
								"Ao retornar ao Brasil, permaneci em Macapá para continuar meu trabalho na capoeira, fundando o grupo Malê. Em 1999, criamos a Associação de Capoeira Malê com Borrachinha e Estivador, que foi dissolvida em 2002 devido a desentendimentos com o Mestre Estivador."
							)}
						</p>

						<p>
							{t(
								"Após isso, voltei a Recife, onde fui formado professor por Mestre João Mulatinho, presidente da Federação de Capoeira de Pernambuco, e passei no exame de professor, recebendo apoio e reconhecimento de muitos mestres. Em julho de 2003, participei de um encontro internacional de capoeira, organizado pelos grupos São Salomão e Alto Astral. A energia positiva desses eventos e o incentivo de diversos mestres me inspiraram a fundar o grupo de capoeira Energia Pura, em 25 de agosto de 2003. Retornei a Macapá e criei a Associação Energia Pura, com o objetivo de expandir a prática da capoeira no Amapá e torná-la reconhecida em todo o Brasil. Em 2004, atendendo a pedidos de alunos e graduados como Camaleão (do grupo Malê), estabelecemos filiais da Associação Energia Pura na Martinica e em Cayenne, Guiana Francesa, com a colaboração dos instrutores Jamanta e Borrachinha, que haviam sido meus alunos em Macapá."
							)}
						</p>

						<p>
							{t(
								"Desde 2005, dedico três meses por ano ao ensino da capoeira em Trento, na Itália. No dia 13 de julho de 2007, recebi o título de Contra-Mestre pela Federação de Capoeira de Pernambuco, após um estágio com Mestre Mulatinho."
							)}
						</p>

						<p>
							{t(
								"Hoje, tanto no Brasil quanto na França, os alunos da Associação Energia Pura estão profundamente engajados, e temos inúmeros projetos para desenvolver a capoeira, promovendo-a tanto no âmbito educacional quanto cultural."
							)}
						</p>
					</div>
				</section>

				<section className="px-8 mb-8">
					<h2
						className="text-2xl sm:text-3xl text-center font-bold text-green-900 mb-4"
						data-aos="fade-down">
						{t("Sistema de Graduação")}
					</h2>

					<img
						src={graduationSystem}
						alt={t("Sistema de Graduação")}
						className="w-full sm:w-1/2 mx-auto rounded-lg shadow-lg mb-1 border-2 border-green-900"
						data-aos="fade-up"
					/>
				</section>

				<section className="px-8 mb-8">
					<h2
						className="text-3xl text-center font-bold text-green-900 mb-4"
						data-aos="fade-down">
						{t("Uniforme")}
					</h2>

					<img
						src={uniform}
						alt={t("Uniforme da Capoeira")}
						className="w-full sm:w-1/2 mx-auto rounded-lg shadow-lg mb-1 border-2 border-green-900"
						data-aos="fade-up"
					/>
				</section>
			</main>

			<Footer />
		</>
	);
}
