import Image from "next/image";

const HangmanComponent = () => {
	return (
		<div>
			<h1>Hangman Game</h1>
			<svg width="200" height="300" xmlns="http://www.w3.org/2000/svg">
				{/* <!-- Rod --> */}
				{/* <!-- Vertical rod --> */}
				<line x1="20" y1="280" x2="20" y2="20" stroke="white" strokeWidth="4" />
				{/* <!-- Horizontal rod --> */}
				<line x1="20" y1="20" x2="100" y2="20" stroke="white" strokeWidth="4" />
				{/* <!-- Small vertical line for hanging --> */}
				<line
					x1="100"
					y1="20"
					x2="100"
					y2="50"
					stroke="white"
					strokeWidth="4"
				/>
				{/* <!-- Base --> */}
				<line
					x1="0"
					y1="280"
					x2="150"
					y2="280"
					stroke="white"
					strokeWidth="4"
				/>
				{/* <!-- Head --> */}
				<circle
					cx="100"
					cy="70"
					r="20"
					stroke="white"
					strokeWidth="4"
					fill="none"
				/>
				{/* <!-- Body --> */}
				<line
					x1="100"
					y1="90"
					x2="100"
					y2="150"
					stroke="white"
					strokeWidth="4"
				/>
				{/* <!-- Left arm --> */}
				<line
					x1="100"
					y1="110"
					x2="70"
					y2="130"
					stroke="white"
					strokeWidth="4"
				/>
				{/* <!-- Right arm --> */}
				<line
					x1="100"
					y1="110"
					x2="130"
					y2="130"
					stroke="white"
					strokeWidth="4"
				/>
				{/* <!-- Left leg --> */}
				<line
					x1="100"
					y1="150"
					x2="80"
					y2="190"
					stroke="white"
					strokeWidth="4"
				/>
				{/* <!-- Right leg --> */}
				<line
					x1="100"
					y1="150"
					x2="120"
					y2="190"
					stroke="white"
					strokeWidth="4"
				/>
			</svg>
		</div>
	);
};

export default HangmanComponent;
