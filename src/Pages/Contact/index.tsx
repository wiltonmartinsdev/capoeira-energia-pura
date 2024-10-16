import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import { ContactForm } from "@/components/ContactForm";
import logoEP from "@/assets/logoEnergia.png";

// Declara a função initMap no objeto Window
declare global {
	interface Window {
		initMap: () => void;
	}
}

export function Contact() {
	useEffect(() => {
		function initMap() {
			const mapCenter = {
				lat: 4.92175,
				lng: -52.31874,
			};

			const map = new google.maps.Map(
				document.getElementById("map") as HTMLElement,
				{
					center: mapCenter,
					zoom: 15,
					mapId: "cba3dd6f8520a47a",
				}
			);

			const marker = new google.maps.marker.AdvancedMarkerElement({
				map: map,
				position: mapCenter,
				title: "Associação Energia Pura",
			});

			// Criando o InfoWindow customizado e iniciando oculto
			const infoWindowContainer = document.createElement("div");
			infoWindowContainer.className = "custom-infowindow-container";
			infoWindowContainer.innerHTML = `
                <h3>Associação Energia Pura Internacional</h3>
                <p>Cité Bonhomme, 02, Rue des Immortelles, Guiana Francesa</p>
                <div class="wrapper-maps"> 
                    <div id="maps"> 
                        <a href="https://www.google.com/maps/place/Cit%C3%A9+bonhomme/@4.92175,-52.31874,7826m/data=!3m1!1e3!4m6!3m5!1s0x8d123ffe86ccb945:0xf27b2a285f4f08a4!8m2!3d4.8508131!4d-52.3242815!16s%2Fg%2F11rkfvvzvg!5m1!1e1?hl=pt-BR&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" width="76.75" height="30" viewBox="0 0 256 500"><path fill="#34a853" d="M70.585 271.865a371 371 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"/><path fill="#fbbc04" d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"/><path fill="#4285f4" d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"/><path fill="#1a73e8" d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"/><path fill="#ea4335" d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"/></svg>
                            Visualize no Google Maps
                        </a>
                    </div>
                    
                    <div id="routes">        
                        <a href="https://www.google.com/maps/dir/?api=1&destination=4.92175,-52.31874" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="#4285f4" d="M11 22v-5q0-1.4-.425-2.075T9.45 13.6l1.425-1.425q.3.275.575.588t.55.662q.35-.475.713-.837t.737-.713Q14.4 11 15.175 9.85T16 5.825L14.425 7.4L13 6l4-4l4 4l-1.4 1.4L18 5.825q-.05 3.575-1.1 5.088t-2.1 2.462q-.8.725-1.3 1.413T13 17v5zM6.2 8.175q-.1-.5-.137-1.1T6 5.825L4.4 7.4L3 6l4-4l4 4l-1.425 1.4L8 5.85q0 .525.05.988t.1.862zm2.15 4.4q-.5-.525-.962-1.225t-.813-1.725L8.5 9.15q.25.675.575 1.15t.7.85z"/></svg>
                            Ver rotas
                        </a>  
                    </div>
                </div>
            `;
			infoWindowContainer.style.display = "none"; // Inicia o infowindow oculto

			// Adiciona o InfoWindow customizado próximo ao marcador
			const infoWindow = new google.maps.OverlayView();
			infoWindow.onAdd = function () {
				const panes = this.getPanes();
				panes?.floatPane.appendChild(infoWindowContainer);
			};
            infoWindow.draw = function () {
                const markerPosition = marker.position as google.maps.LatLng | google.maps.LatLngLiteral | null;
                if (markerPosition) {
                    const position = this.getProjection().fromLatLngToDivPixel(markerPosition);
                    if (position) {
                        infoWindowContainer.style.left = `${position.x - 159}px`;
                        infoWindowContainer.style.top = `${position.y - 161}px`;
                    }
                }
            };
			infoWindow.onRemove = function () {
				infoWindowContainer.style.display = "none";
			};
			infoWindow.setMap(map);

			// Mostrar o InfoWindow ao clicar no marcador
			marker.addListener("click", () => {
				infoWindowContainer.style.display = "block";
				infoWindow.draw();
			});

			// Ocultar o InfoWindow ao clicar fora do mapa
			map.addListener("click", () => {
				infoWindowContainer.style.display = "none";
			});
		}

		if (window.google) {
			initMap();
		} else {
			window.initMap = initMap;
		}
	}, []);
	return (
		<>
			<div className="min-w-80 bg-green-950 border-b-4 border-yellow-400 sticky top-0 z-50 mb-10">
				<header className="relative h-28 md:h-28 bg-green-950 flex items-center justify-around sm:justify-normal sm:px-4  lg:max-w-[1024px] lg:mx-auto  ">
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
										to="/about"
										className={({ isActive }) =>
											isActive
												? "text-yellow-400"
												: "text-white"
										}>
										Sobre nós
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

			<main className="h-[850px] sm:h-screen flex flex-col justify-center">
				<p className="text-green-900 font-extrabold text-xl sm:text-2xl px-4 text-center mb-10">
					Junte-se à Família Energia Pura! Inscreva-se e venha jogar!
				</p>

				<ContactForm />

				<div
					id="map"
					className="w-full h-[500px] mt-10"></div>
			</main>
			<Footer />
		</>
	);
}
