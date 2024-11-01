import { Header } from "@/components/Header";
import { LanguageSelection } from "@/components/LanguageSelection";

export function Store() {
	return (
		<>
			<div className="min-w-80 bg-green-950 border-b-4 border-yellow-400 sticky top-0 z-50">
				<LanguageSelection />

				<Header />
			</div>

			<main className="min-w-80 xl:max-w-[1920px] mx-auto"></main>
		</>
	);
}
