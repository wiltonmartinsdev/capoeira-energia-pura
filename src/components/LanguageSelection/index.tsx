import { useState } from "react";
import { useTranslation } from "react-i18next";

import BrazilFlagIcon from "@/assets/brazilFlagIcon.svg";
import FranceFlagIcon from "@/assets/franceFlagIcon.svg";
import ItalyFlagIcon from "@/assets/italyFlagIcon.svg";
import UsaFlagIcon from "@/assets/usaFlagIcon.svg";

export function LanguageSelection() {
	const { t, i18n } = useTranslation();

	const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

	const changeLanguage = async (lng: string) => {
		await i18n.changeLanguage(lng);
		setCurrentLanguage(lng);
		window.scrollTo(0, 0);
	};

	return (
		<div className="w-40 h-14 mx-auto text-white flex justify-center gap-4">
			<button
				type="button"
				title={t("Bandeira do Brasil")}
				onClick={() => changeLanguage("pt")}>
				<img
					src={BrazilFlagIcon}
					alt={t("Bandeira do Brasil")}
					className={
						currentLanguage === "pt"
							? "border-2 rounded-3xl border-yellow-400"
							: ""
					}
				/>
			</button>

			<button
				type="button"
				title={t("Bandeira da França")}
				onClick={() => changeLanguage("fr")}>
				<img
					src={FranceFlagIcon}
					alt={t("Bandeira da França")}
					className={
						currentLanguage === "fr"
							? "border-2 rounded-3xl border-yellow-400"
							: ""
					}
				/>
			</button>

			<button
				type="button"
				title={t("Bandeira da Itália")}
				onClick={() => changeLanguage("it")}>
				<img
					src={ItalyFlagIcon}
					alt={t("Bandeira da Itália")}
					className={
						currentLanguage === "it"
							? "border-2 rounded-3xl border-yellow-400"
							: ""
					}
				/>
			</button>

			<button
				type="button"
				title={t("Bandeira dos Estados Unidos")}
				onClick={() => changeLanguage("en")}>
				<img
					src={UsaFlagIcon}
					alt={t("Bandeira dos Estados Unidos")}
					className={
						currentLanguage === "en"
							? "border-2 rounded-3xl border-yellow-400"
							: ""
					}
				/>
			</button>
		</div>
	);
}
