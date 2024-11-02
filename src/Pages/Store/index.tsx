import { useTranslation } from "react-i18next";

import { Header } from "@/components/Header";
import { LanguageSelection } from "@/components/LanguageSelection";
import ConstructionIcon from "@/assets/constructionIcon.svg";

export function Store() {
	const { t } = useTranslation();
	return (
		<>
			<div className="min-w-80 bg-green-950 border-b-4 border-yellow-400 sticky top-0 z-50">
				<LanguageSelection />

				<Header />
			</div>

			<main
				className="min-w-80 xl:max-w-[1920px] mx-auto flex justify-center items-center"
				style={{ minHeight: "calc(100vh - 166px)" }}>
				<section className="font-roboto-flex font-black text-green-900 flex flex-col items-center gap-6 lg:flex-row lg:px-20 lg:gap-0">
					<img
						src={ConstructionIcon}
						alt=""
					/>

					<h1 className="text-xl px-4 sm:text-2xl text-center">
						{t(
							"Esta página está em construção. Volte em breve para ver as novidades!"
						)}
					</h1>
				</section>
			</main>
		</>
	);
}
