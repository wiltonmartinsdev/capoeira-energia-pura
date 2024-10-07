// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import YouTube from "react-youtube";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export function Carousel() {
	const videoOptions = { width: "100%", height: "500" };

	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
                pagination-type="progressbar"
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay,Pagination, Navigation]}
				className="mySwiper">
				<SwiperSlide>
					<YouTube
						videoId="9t-fgOlXE18"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="nbFBvECVsa8"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="5hAYfxC9O-U"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="Bns3swbefDo"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="Rv2-euqRT0k"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="74Kp3rWJyMY"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="2QQL_cdF2Wg"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="0gWzErUoIQA"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="wGuT2KhYesc"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="AC1opQJabMs"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="3Bs_nmb-xKc"
						opts={videoOptions}
					/>
				</SwiperSlide>

				<SwiperSlide>
					<YouTube
						videoId="waCk95zBWnQ"
						opts={videoOptions}
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
