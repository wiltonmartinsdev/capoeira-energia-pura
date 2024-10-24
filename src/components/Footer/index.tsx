import { useTranslation } from "react-i18next";

import { YoutubeLogo } from "@phosphor-icons/react";

export function Footer() {
	const { t } = useTranslation();

	return (
		<>
			<footer className="min-w-80 h-28 bg-green-950 border-t-2 border-yellow-400">
				<div className="sm:w-[385px] border-b-2 border-l-2 border-r-2  border-yellow-400 rounded-b-lg mx-auto flex sm:justify-between mb-4">
					<span className=" text-xs sm:text-base leading-9 text-center font-bold mx-auto text-white bg-green-950 sm:py-[5px]">
						{t("Energia Pura Internacional")}
					</span>

					<span className="leading-9 text-green-900 font-bold bg-yellow-400 w-36 text-center">
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
							<YoutubeLogo
								size={32}
								color="#f50e02"
								weight="fill"
							/>
						</a>
					</li>

					<li className="icon facebook">
						<span className="tooltip">Facebook</span>
						<a
							href="https://www.facebook.com/capoeiraguyane"
							target="_blank"
							rel="noopener noreferrer">
							<svg
								viewBox="0 0 320 512"
								height="1.2em"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
							</svg>
						</a>
					</li>

					<li className="icon instagram">
						<span className="tooltip">Instagram</span>
						<a
							href="https://www.instagram.com/capoeira_energia_pura/"
							target="_blank"
							rel="noopener noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								fill="currentColor"
								viewBox="0 0 256 256">
								<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
							</svg>
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
}
