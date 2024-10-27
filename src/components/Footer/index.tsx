import { useTranslation } from "react-i18next";

import FacebookIcon from "@/assets/facebookIcon.svg";
import InstagramIcon from "@/assets/instagramIcon.svg";
import WhatsAppIcon from "@/assets/whatsAppIcon.svg";
import YoutubeIcon from "@/assets/youtubeIcon.svg";

export function Footer() {
	const { t } = useTranslation();

	return (
		<>
			<footer className="min-w-80 h-28 bg-green-950 border-t-2 border-yellow-400">
				<div className="sm:w-[385px] border-b-2 border-l-2 border-r-2  border-yellow-400 rounded-b-lg mx-auto flex sm:justify-between mb-4">
					<span className="font-roboto-flex text-xs sm:text-base leading-9 text-center font-black italic mx-auto text-white bg-green-950 sm:py-[5px]">
						{t("Energia Pura Internacional")}
					</span>

					<span className="font-roboto-flex leading-9 text-green-900 font-black italic bg-yellow-400 w-36 text-center">
						Só o filé!
					</span>
				</div>

				<div className="flex flex-col items-center justify-center gap-0.5">
					<a
						href="https://devwiltonmartins.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white hover:text-yellow-400 text-xs">
						{t("Desenvolvido por Wilton Lira Martins")}
					</a>

					<p className="text-white hover:text-yellow-400 text-xs cursor-default">
						Copyright &copy; 2024 -{" "}
						{t("Todos os direitos reservados")}
					</p>
				</div>

				<ul className="wrapper bg-green-950">
					<li className="icon youtube">
						<span className="tooltip">YouTube</span>
						<a
							href="https://www.youtube.com/@energiapura8680"
							target="_blank"
							rel="noopener noreferrer">
							<img
								src={YoutubeIcon}
								alt={t("Ícone do YouTube")}
							/>
						</a>
					</li>

					<li className="icon facebook">
						<span className="tooltip">Facebook</span>
						<a
							href="https://www.facebook.com/capoeiraguyane"
							target="_blank"
							rel="noopener noreferrer">
							<img
								src={FacebookIcon}
								alt={t("Ícone do Facebook")}
							/>
						</a>
					</li>

					<li className="icon instagram">
						<span className="tooltip">Instagram</span>
						<a
							href="https://www.instagram.com/capoeira_energia_pura"
							target="_blank"
							rel="noopener noreferrer">
							<img
								src={InstagramIcon}
								alt={t("Ícone do Instagram")}
							/>
						</a>
					</li>

					<li className="icon whatsapp">
						<span className="tooltip">WhatsApp</span>
						<a
							href="#"
							// target="_blank"
							rel="noopener noreferrer">
							<img
								src={WhatsAppIcon}
								alt={t("Ícone do WhatsApp")}
							/>
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
}
