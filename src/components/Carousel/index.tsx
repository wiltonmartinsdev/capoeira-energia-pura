import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useRef } from "react";

export function Carousel() {
	// Definir que o useRef irá armazenar elementos do tipo HTMLIFrameElement ou null
	const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

	// Função para pausar todos os vídeos
	const pauseVideos = () => {
		videoRefs.current.forEach((videoRef) => {
			if (videoRef && videoRef.contentWindow) {
				videoRef.contentWindow.postMessage(
					'{"event":"command","func":"pauseVideo","args":""}',
					"*"
				);
			}
		});
	};

	return (
		<Swiper
			spaceBetween={30}
			centeredSlides={true}
			pagination-type="progressbar"
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
				pauseOnMouseEnter: true,
			}}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			modules={[Autoplay, Pagination, Navigation]}
			className="mySwiper"
			onSlideChange={() => pauseVideos()} // Pausa os vídeos na troca de slide
		>
			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[0] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/9t-fgOlXE18?enablejsapi=1" // 'enablejsapi=1' é necessário para controlar o vídeo via JS
					title="2º Festival Dona Maria Como Vai Você?, Macapá-Amapá-Brasil, 29 a 30/03/2024."
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[1] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/AC1opQJabMs?enablejsapi=1" // 'enablejsapi=1' é necessário para controlar o vídeo via JS
					title="La Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[2] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/0gWzErUoIQA"
					title="La Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[3] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/nbFBvECVsa8"
					title="Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[4] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/5hAYfxC9O-U"
					title="Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[5] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/Bns3swbefDo"
					title="Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[6] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/Rv2-euqRT0k"
					title="Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[7] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/74Kp3rWJyMY"
					title="La Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[8] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/2QQL_cdF2Wg"
					title="La Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[9] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/wGuT2KhYesc"
					title="La Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[10] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/3Bs_nmb-xKc"
					title="La Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>

			<SwiperSlide>
				<iframe
					ref={(el) => (videoRefs.current[11] = el)} // Armazena a referência do iframe
					width="100%"
					src="https://www.youtube.com/embed/waCk95zBWnQ"
					title="La Roda de #Capoiera, tous les vendredi à Energia Pura Guyane avec Gato Preto!"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerPolicy="strict-origin-when-cross-origin"
					allowFullScreen
					className="h-[320px] sm:h-[500px]"
				/>
			</SwiperSlide>
		</Swiper>
	);
}
