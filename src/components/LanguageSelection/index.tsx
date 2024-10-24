import { useTranslation } from "react-i18next";

import BrazilFlagIcon from "@/assets/brazilFlagIcon.svg";
import FranceFlagIcon from "@/assets/franceFlagIcon.svg";
import ItalyFlagIcon from "@/assets/italyFlagIcon.svg";
import UsaFlagIcon from "@/assets/usaFlagIcon.svg";

export function LanguageSelection() {
	const { t, i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};

	return (
		<div className="w-40 h-14 mx-auto text-white flex justify-center gap-4">
			<button
				title={t("Bandeira do Brasil")}
				onClick={() => changeLanguage("pt")}>
				<img
					src={BrazilFlagIcon}
					alt={t("Bandeira do Brasil")}
				/>
			</button>

			<button
				title={t("Bandeira da França")}
				onClick={() => changeLanguage("fr")}>
				<img
					src={FranceFlagIcon}
					alt={t("Bandeira da França")}
				/>
			</button>

			<button
				title={t("Bandeira da Itália")}
				onClick={() => changeLanguage("it")}>
				<img
					src={ItalyFlagIcon}
					alt={t("Bandeira da Itália")}
				/>
			</button>

			<button
				title={t("Bandeira dos Estados Unidos")}
				onClick={() => changeLanguage("en")}>
				<img
					src={UsaFlagIcon}
					alt={t("Bandeira dos Estados Unidos")}
				/>
			</button>
		</div>
	);
}
