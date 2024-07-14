import Image from "next/image";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Background from "@/app/components/Background";
import HangmanComponent from "@/app/components/HangmanComponent";
import StarsCanvas from "@/app/components/StarBackground";

export default function Home() {
	return (
		<>
			<StarsCanvas />
			<Navbar />
			<main className="flex min-h-screen flex-col items-center justify-center">
				<HangmanComponent />
			</main>
		</>
	);
}
