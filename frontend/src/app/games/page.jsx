import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Games from "../components/Games";

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex min-h-screen flex-col items-center justify-center">
				<Games />
			</main>
		</>
	);
}
