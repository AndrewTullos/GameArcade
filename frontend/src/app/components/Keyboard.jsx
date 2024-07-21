"use client";

import React, { useState } from "react";

const keys = [
	["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
	["A", "S", "D", "F", "G", "H", "J", "K", "L"],
	["Z", "X", "C", "V", "B", "N", "M", ":/"],
];

function Key({ value, onClick }) {
	return (
		<kbd className="kbd mt-1" onClick={() => onClick(value)}>
			{value}
		</kbd>
	);
}

function Keyboard() {
	const [selectedKey, setSelectedKey] = useState("");
	const [attemptsLeft, setAttemptsLeft] = useState(6);
	const [correct, setCorrect] = useState(false);
	const [guessedLetters, setGuessedLetters] = useState([]);
	const [gameOver, setGameOver] = useState(false);

	const handleKeyClick = (key) => {
		setSelectedKey(key);
	};

	const handleSubmit = async () => {
		try {
			const response = await fetch("http://127.0.0.1:5000/post-check-letter", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ selectedKey }),
			});
			const data = await response.json();
			console.log("Response from server:", data);

			// Update state based on the response
			setAttemptsLeft(data.attempts_left);
			setCorrect(data.correct);
			setGuessedLetters([...data.guessed_letters]);

			// Reset selectedKey after submission
			setSelectedKey("");

			// Check for game over condition
			if (data.attempts_left <= 0) {
				setGameOver(true);
			}
		} catch (error) {
			console.error("Error fetching the letter submitted:", error);
		}
	};

	return (
		<div className="group rounded-lg border-4 border-neutral-700 px-5 py-4 transition-colors hover:border-gray-300 bg-neutral-800/30 text-turquoise">
			{/* Game Over Alert */}
			{gameOver && (
				<div role="alert" className="alert alert-error flex justify-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6 shrink-0 stroke-current justify-center items-center"
						fill="none"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
					<span>G A M E - - O V E R</span>
				</div>
			)}

			{/* Display selected key */}
			{selectedKey ? (
				<div className="m-2 text-center">{selectedKey}</div>
			) : (
				<div className="flex justify-center items-center m-2 text-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="size-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
						/>
					</svg>
				</div>
			)}

			{/* Render keyboard keys */}
			{keys.map((row, rowIndex) => (
				<div key={rowIndex} className="my-1 flex w-full justify-center gap-1">
					{row.map((key, index) => (
						<Key key={index} value={key} onClick={handleKeyClick} />
					))}
				</div>
			))}

			{/* Submit button */}
			<div className="my-1 flex w-full justify-center gap-1">
				<button
					className="kbd mt-1 btn btn-wide text-turquoise"
					onClick={handleSubmit}
				>
					Submit
				</button>
			</div>
		</div>
	);
}

export default Keyboard;
