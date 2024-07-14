import React from "react";

function Hero() {
	return (
		<header
			className="hero w-full flex flex-grow items-start justify-center relative"
			style={{
				backgroundImage: `url('/hero.png')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<div className="absolute inset-0"></div>
			<div className="hero-content text-center text-white z-10 mt-10">
				<div className="max-w-md">
					<h1 className="mb-5 text-5xl font-bold">Let's Game!</h1>
					<p className="mb-5">
						Discover a world of exhilarating games catering to all ages and
						interests. Whether you're seeking nostalgic classics or cutting-edge
						challenges, arcade promises endless fun and excitement.
					</p>
					<a href="./games" className="btn bg-black border-orange">
						<span className="text-mint">Get Started</span>
					</a>
					<div
						aria-hidden="true"
						className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
					>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#b7dca6] to-[#34bea1] opacity-5"
						/>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Hero;
