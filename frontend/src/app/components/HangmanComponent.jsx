import Image from "next/image";

const HangmanComponent = () => (
	<div className="group rounded-lg border-4 border-neutral-700 px-5 py-4 transition-colors hover:border-gray-300 bg-neutral-800/30">
		<h1 className="text-2xl font-bold leading-7 text-orange sm:truncate sm:text-3xl sm:tracking-tight">
			Hangman Game
		</h1>

		{/* Hangman and Pole */}
		<svg
			className="stroke-orange"
			width="200"
			height="300"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* <!-- Rod --> */}
			{/* <!-- Vertical rod --> */}
			<line
				x1="20"
				y1="280"
				x2="20"
				y2="20"
				// stroke="orange"
				strokeWidth="4"
			/>
			{/* <!-- Horizontal rod --> */}
			<line
				x1="20"
				y1="20"
				x2="100"
				y2="20"
				// stroke="orange"
				strokeWidth="4"
			/>
			{/* <!-- Small vertical line for hanging --> */}
			<line
				x1="100"
				y1="20"
				x2="100"
				y2="50"
				// stroke="orange"
				strokeWidth="4"
			/>
			{/* <!-- Base --> */}
			<line
				x1="0"
				y1="280"
				x2="150"
				y2="280"
				// stroke="orange"
				strokeWidth="4"
			/>
			{/* <!-- Head --> */}
			<circle
				cx="100"
				cy="70"
				r="20"
				// stroke="orange"
				strokeWidth="4"
				fill="none"
			/>
			{/* <!-- Body --> */}
			<line
				x1="100"
				y1="90"
				x2="100"
				y2="150"
				// stroke="orange"
				strokeWidth="4"
			/>
			{/* <!-- Left arm --> */}
			<line
				x1="100"
				y1="110"
				x2="70"
				y2="130"
				// stroke="orange"
				strokeWidth="4"
			/>
			{/* <!-- Right arm --> */}
			<line
				x1="100"
				y1="110"
				x2="130"
				y2="130"
				// stroke="orange"
				strokeWidth="4"
			/>
			{/* <!-- Left leg --> */}
			<line
				x1="100"
				y1="150"
				x2="80"
				y2="190"
				// stroke="orange"
				strokeWidth="4"
			/>
			{/* <!-- Right leg --> */}
			<line
				x1="100"
				y1="150"
				x2="120"
				y2="190"
				// stroke="orange"
				strokeWidth="4"
			/>
		</svg>

		{/* Letters */}
	</div>
);

export default HangmanComponent;
