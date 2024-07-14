import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

const blunt = localfont({
	src: [
		{
			path: "../../public/fonts/SP-Blunt-Italic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../../public/fonts/SP-Blunt-Outline.otf",
			weight: "700",
			style: "outline",
		},
		{
			path: "../../public/fonts/SP-Blunt-Regular.otf",
			weight: "400",
			style: "regular",
		},
		{
			path: "../../public/fonts/SP-Blunt-Script.otf",
			weight: "400",
			style: "script",
		},
	],
	variable: "--font-blunt",
});

export const metadata = {
	title: "Games, Games, Games!",
	description: "Logic by DrewMadDecent",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="h-full bg-neutral-950 text-base antialiased">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				<style>{blunt.styles}</style>
				<style>{inter.styles}</style>
			</head>
			<body className={`bluntOutline ${inter.className}`}>{children}</body>
		</html>
	);
}
