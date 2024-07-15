import Image from "next/image";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Background from "@/app/components/Background";
import HangmanComponent from "@/app/components/HangmanComponent";
import StarsCanvas from "@/app/components/StarBackground";
import SpacesComponent from "@/app/components/HangmanSpacesComponent";

export default function Home() {
	return (
		<>
			<StarsCanvas />
			<Navbar />
			<main className="flex min-h-screen flex-col items-center justify-center">
				<div className="flex flex-row-2">
					<div className="items-center justify-center m-5">
						<SpacesComponent />
					</div>
					<div className=" items-center justify-center m-5">
						<HangmanComponent />
					</div>
				</div>
				<div className="flex flex-row-2">
					<div className=" items-center justify-center m-5">
						<HangmanComponent />
					</div>
					<div className=" items-center justify-center m-5">
						<HangmanComponent />
					</div>
				</div>
				<div className="flex-col"></div>
			</main>
		</>
	);
}
