import { useTranslation } from "react-i18next";

import { YoutubeLogo } from "@phosphor-icons/react";

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

					<li className="icon whatsapp">
						<span className="tooltip">WhatsApp</span>
						<a
							href="#"
							// target="_blank"
							rel="noopener noreferrer">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="31.76"
								height="32"
								viewBox="0 0 256 258">
								<defs>
									<linearGradient
										id="logosWhatsappIcon0"
										x1="50%"
										x2="50%"
										y1="100%"
										y2="0%">
										<stop
											offset="0%"
											stop-color="#1faf38"
										/>
										<stop
											offset="100%"
											stop-color="#60d669"
										/>
									</linearGradient>
									<linearGradient
										id="logosWhatsappIcon1"
										x1="50%"
										x2="50%"
										y1="100%"
										y2="0%">
										<stop
											offset="0%"
											stop-color="#f9f9f9"
										/>
										<stop
											offset="100%"
											stop-color="#fff"
										/>
									</linearGradient>
								</defs>
								<path
									fill="url(#logosWhatsappIcon0)"
									d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"
								/>
								<path
									fill="url(#logosWhatsappIcon1)"
									d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"
								/>
								<path
									fill="#fff"
									d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"
								/>
							</svg>
						</a>
					</li>
				</ul>
			</footer>
		</>
	);
}
