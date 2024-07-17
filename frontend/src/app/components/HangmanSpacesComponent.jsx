"use client";
import React, { useState } from "react";

function HangmanSpacesComponent() {
	const [charCount, setCharCount] = useState(0);

	const fetchCharCount = async () => {
		try {
			const response = await fetch("http://127.0.0.1:5000/get-char-count");
			const data = await response.json();
			setCharCount(data.char_count);
		} catch (error) {
			console.error("Error fetching the character count:", error);
		}
	};

	const handleButtonClick = () => {
		fetchCharCount();
	};

	const renderLines = () => {
		const lines = [];
		for (let i = 0; i < charCount; i++) {
			lines.push(
				<line
					key={i}
					x1={i * 40}
					y1="280"
					x2={i * 40 + 30}
					y2="280"
					strokeWidth="4"
				/>
			);
		}
		return lines;
	};

	return (
		<div className="group rounded-lg border-4 border-neutral-700 px-5 py-4 transition-colors hover:border-gray-300 bg-neutral-800/30 flex flex-col items-center justify-center">
			<button
				className="btn bg-black border-orange"
				onClick={handleButtonClick}
			>
				Press Play
			</button>
			<svg
				className="stroke-orange "
				width="auto"
				height="300"
				xmlns="http://www.w3.org/2000/svg"
			>
				{renderLines()}
			</svg>
		</div>
	);
}

export default HangmanSpacesComponent;
