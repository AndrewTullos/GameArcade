import React from "react";
import Image from "next/image";

function Hero() {
	return (
		<header
			className="hero min-h-screen w-full flex items-start justify-center relative"
			style={{
				backgroundImage: `url('/hero.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="absolute inset-0 "></div>
			<div className="hero-content  text-center text-white z-10 mt-10">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Let's Game!</h1>
					<p className="mb-5">
						Discover a world of exhilarating games catering to all ages and
						interests. Whether you're seeking nostalgic classics or cutting-edge
						challenges, arcade promises endless fun and excitement.
					</p>
					<button className="btn btn-white">Get Started</button>
				</div>
			</div>
		</header>
	);
}

export default Hero;
