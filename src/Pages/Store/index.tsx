
import { Header } from "@/components/Header";
import { LanguageSelection } from "@/components/LanguageSelection";
import ConstructionIcon from "@/assets/contructionIcon.svg";
import RocketIcon from "@/assets/rocketIcon.svg";

export function Store() {


	return (
		<>
			<div className="min-w-80 bg-green-950 border-b-4 border-yellow-400 sticky top-0 z-50">
				<LanguageSelection />

				<Header />
			</div>

			<main className="min-w-80 xl:max-w-[1920px] mx-auto h-screen flex justify-center">
				<section className="font-roboto-flex font-black text-green-900 flex items-center gap-6">
					<img
						src={ConstructionIcon}
						alt=""
					/>

					<h1 className="text-2xl">
                        Esta página está em construção. Volte em breve para ver as novidades!
					</h1>

					<img
						src={RocketIcon}
						alt=""
					/>
				</section>
			</main>
		</>
	);
}
