import rodaDeCapoeira from "@/assets/roda-de-capoeira.jpeg";

export function ScrollIndicator() {
	return (
		<div className="relative h-screen scroll-smooth">
			<img
				src={rodaDeCapoeira}
				alt="Imagem de fundo"
				className="object-cover w-full h-screen"
			/>

			<div className="absolute inset-x-0 bottom-52 sm:bottom-36 lg:bottom-40 xl:bottom-32 flex justify-center">
				<div className="flex flex-col justify-center items-center text-white">
					<a href="#master">
						<svg
							className="sm:block w-10 h-10 sm:w-16 sm:h-16 animate-bounce text-green-950"
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
	);
}
